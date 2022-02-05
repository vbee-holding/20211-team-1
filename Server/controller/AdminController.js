const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cheerio = require("cheerio");
const rp = require("request-promise");
const Article = require("../models/Article");
const Admin = require("../models/Admin");

class AdminRouter {

    constructor() {
        this.refreshTokens = [];
    }

    async getAdmins(req, res, next) {
        try {
            const admins = await Admin.find();
            res.json({
                success: true,
                data: admins,
            });
        } catch (err) {
            res.json({
                success: false,
                error: err,
            });
        }
    }

    generateAccessToken(admin) {
        try {
            return jwt.sign({ _id: admin._id, email: admin.email }, process.env.SECRET_KEY_TOKEN, { expiresIn: "15m" });
        }
        catch (err) {
            console.log(err);
        }
    }

    generateRefreshToken(admin) {
        try {
            return jwt.sign({ _id: admin._id, email: admin.email }, process.env.SECRET_KEY_REFRESHTOKEN, { expiresIn: "30d" });
        }
        catch (err) {
            console.log(err);
        }
    }

    logIn = async (req, res, next) => {

        try {
            const { email, password } = req.body;
            const admin = await Admin.findOne({ email: email });

            if (admin) {
                if (password === admin.password) {
                    const accessToken = this.generateAccessToken(admin);
                    const refreshToken = this.generateRefreshToken(admin);

                    this.refreshTokens.push(refreshToken);
                    res.json({
                        success: true,
                        data: {
                            accessToken: accessToken,
                            refreshToken: refreshToken,
                        },
                    });
                }
                else {
                    res.status(400).json({
                        success: false,
                        message: "Password is incorrect",
                    });
                }
            }
            else {
                res.status(400).json({
                    success: false,
                    message: "Email is incorrect",
                });
            }

        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                error: err,
            })
        }

    }

    logOut = async (req, res, next) => {
        const { refreshToken } = req.body;
        this.refreshTokens = this.refreshTokens.filter(token => token !== refreshToken);
        res.json({
            success: true,
            data: {
                message: "You loged out succesfully"
            },
        });
    }

    refreshToken = async (req, res, next) => {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) return res.status(400).json({
                success: false,
                data: {
                    message: "you are not authenticated ",
                }
            });

            if (!this.refreshTokens.includes(refreshToken)) return res.status(400).json({
                success: false,
                data: {
                    message: "Refresh token is not valid",
                },
            });

            jwt.verify(refreshToken, "myRefreshSecretKey", (err, admin) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err,
                    })
                }

                this.refreshTokens = this.refreshTokens.filter((token) => token !== refreshToken);
                const newRefreshToken = this.generateRefreshToken(admin);
                const newAccessToken = this.generateAccessToken(admin);
                this.refreshTokens.push(newRefreshToken);

                res.json({
                    success: true,
                    data: {
                        accessToken: newAccessToken,
                        refreshToken: newRefreshToken,
                    }
                })
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                err: err,
            })
        }
    }

    resetPassword = async (req, res, next) => {
        const { password, newPassword, email } = req.body;
        try {
            const admin = await Admin.findOne({ email: email });
            if (admin) {
                if (password === admin.password) {

                    await Admin.findOneAndUpdate(email, {
                        email: email,
                        password: newPassword,
                    });
                    res.json({
                        success: true,
                        message: "Thành công",
                    });
                }
                else res.status(400).json({
                    success: false,
                    message: "Sai mật khẩu"
                })
            }
        }
        catch (err) {

            console.log(err);
            res.status(500).json({
                success: false,
                error: err,
            })
        }

    }


    // async getAdmin(req, res, next) {
    //   const { adminId } = req.params;
    //   try {
    //     const admin = await Admin.findById(adminId);
    //     res.json({
    //       success: true,
    //       data: admin,
    //     });
    //   } catch (err) {
    //     res.json({
    //       success: false,
    //       error: err,
    //     });
    //   }
    // }

    // // Login
    // async login(req, res, next) {
    //   const email = req.body.email;
    //   const password = req.body.password;

    //   try {
    //     const admin = await Admin.findOne({ email: email });

    //     if (admin) {
    //       const match = await bcrypt.compare(password, admin.password);

    //       if (match) {
    //         const token = jwt.sign(
    //           {
    //             exp: Math.floor(Date.now() / 1000) + 60 * 60,
    //             email: admin.email,
    //           },
    //           "secret"
    //         );

    //         res.json({
    //           success: true,
    //           data: {
    //             access_token: token,
    //             exp: Math.floor(Date.now() / 1000) + 60 * 60,
    //           },
    //         });
    //       }
    //     } else {
    //       res.json({
    //         success: false,
    //         message: "Tài khoản không tồn tại hoặc sai mật khẩu!",
    //       });
    //     }
    //   } catch (err) {
    //     res.json({
    //       success: false,
    //       error: err,
    //     });
    //   }
    // }

    // // SignUp
    // async postAdmin(req, res, next) {
    //   var admin = req.body;
    /*
         const saltRounds = 10;
         const salt = bcrypt.genSaltSync(saltRounds);
    
         admin.password = bcrypt.hashSync(admin.password, salt);
    */
    //   try {
    //     await Admin.create(admin);

    //     res.json({
    //       success: true,
    //       data: admin,
    //     });
    //   } catch (err) {
    //     res.status(400).json({
    //       success: false,
    //       error: err,
    //     });
    //     console.log(err);
    //   }
    // }

    // async putAdmin(req, res, next) {
    //   const newAdmin = req.body;
    //   const { adminId } = req.params;
    //   try {
    //     await Admin.findByIdAndUpdate(adminId, newAdmin);
    //     res.json({
    //       success: true,
    //       data: newAdmin,
    //     });
    //   } catch (err) {
    //     res.status(400).json({
    //       success: false,
    //       error: err,
    //     });
    //   }
    // }

    async deleteAdmin(req, res, next) {
        const { adminId } = req.params;
        try {
            await Admin.findByIdAndDelete(adminId);
            res.json({
                success: true,
                message: "Delete successfully",
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                error: err,
            });
        }
    }

     async crawlData(req, res) {
        const SOURCE = [
            // Tin nóng
            {
                url: "https://nhandan.vn/giaoduc",
                parent_tag: "article",
                true_url: "https://nhandan.vn",
                thumbnail_tag: ".box-img a img",
                thumbnail_attr: "data-src",
                link_tag: ".box-img a",
                link_attr: "href",
                title_tag: ".box-img a",
                title_attr: "title",
                category: "61f00169804821068b64f1a8",
                source: "61ecbcf7f22c945535177992",
            },
            {
                url: "https://vietnamnet.vn/vn/giao-duc/",
                parent_tag: ".box-subcate-style4",
                true_url: "https://vietnamnet.vn",
                thumbnail_tag: "img",
                thumbnail_attr: "src",
                link_tag: "a.thumb",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61f00169804821068b64f1a8",
                source: "61ecbd40f22c945535177994",
            },
            {
                url: "https://vnexpress.net/giao-duc",
                parent_tag: "article",
                true_url: "",
                thumbnail_tag: "img",
                thumbnail_attr: "data-src",
                link_tag: ".thumb-art a",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61f00169804821068b64f1a8",
                source: "61ecbdd6f22c945535177996",
            },
            // Tin mới
            {
                url: "https://nhandan.vn/chinhtri",
                parent_tag: "article",
                true_url: "https://nhandan.vn",
                thumbnail_tag: ".box-img a img",
                thumbnail_attr: "data-src",
                link_tag: ".box-img a",
                link_attr: "href",
                title_tag: ".box-img a",
                title_attr: "title",
                category: "61fe9ae7446e87a8dd94ae3b",
                source: "61ecbcf7f22c945535177992",
            },
            {
                url: "https://vietnamnet.vn/vn/thoi-su/chinh-tri/",
                parent_tag: ".box-subcate-style4",
                true_url: "https://vietnamnet.vn",
                thumbnail_tag: "img",
                thumbnail_attr: "src",
                link_tag: "a.thumb",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61fe9ae7446e87a8dd94ae3b",
                source: "61ecbd40f22c945535177994",
            },
            {
                url: "https://vnexpress.net/thoi-su/chinh-tri",
                parent_tag: "article",
                true_url: "",
                thumbnail_tag: "img",
                thumbnail_attr: "data-src",
                link_tag: ".thumb-art a",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61fe9ae7446e87a8dd94ae3b",
                source: "61ecbdd6f22c945535177996",
            },
            //The thao
            {
                url: "https://nhandan.vn/thethao",
                parent_tag: "article",
                true_url: "https://nhandan.vn",
                thumbnail_tag: ".box-img a img",
                thumbnail_attr: "data-src",
                link_tag: ".box-img a",
                link_attr: "href",
                title_tag: ".box-img a",
                title_attr: "title",
                category: "61ecba5ef22c94553517797d",
                source: "61ecbcf7f22c945535177992",
            },
            {
                url: "https://vietnamnet.vn/vn/the-thao/",
                parent_tag: ".box-subcate-style4",
                true_url: "https://vietnamnet.vn",
                thumbnail_tag: "img",
                thumbnail_attr: "src",
                link_tag: "a.thumb",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba5ef22c94553517797d",
                source: "61ecbd40f22c945535177994",
            },
            {
                url: "https://vnexpress.net/bong-da",
                parent_tag: "article",
                true_url: "",
                thumbnail_tag: "img",
                thumbnail_attr: "data-src",
                link_tag: ".thumb-art a",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba5ef22c94553517797d",
                source: "61ecbdd6f22c945535177996",
            },
            // Giai tri
            {
                url: "https://nhandan.vn/hanh-trinh-kham-pha",
                parent_tag: "article",
                true_url: "https://nhandan.vn",
                thumbnail_tag: ".box-img a img",
                thumbnail_attr: "data-src",
                link_tag: ".box-img a",
                link_attr: "href",
                title_tag: ".box-img a",
                title_attr: "title",
                category: "61ecba4ff22c945535177979",
                source: "61ecbcf7f22c945535177992",
            },
            {
                url: "https://vietnamnet.vn/vn/giai-tri/",
                parent_tag: ".box-subcate-style4",
                true_url: "https://vietnamnet.vn",
                thumbnail_tag: "img",
                thumbnail_attr: "src",
                link_tag: "a.thumb",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba4ff22c945535177979",
                source: "61ecbd40f22c945535177994",
            },
            {
                url: "https://vnexpress.net/giai-tri",
                parent_tag: "article",
                true_url: "",
                thumbnail_tag: "img",
                thumbnail_attr: "data-src",
                link_tag: ".thumb-art a",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba4ff22c945535177979",
                source: "61ecbdd6f22c945535177996",
            },
            // Cong nghệ
            {
                url: "https://nhandan.vn/khoahoc-congnghe",
                parent_tag: "article",
                true_url: "https://nhandan.vn",
                thumbnail_tag: ".box-img a img",
                thumbnail_attr: "data-src",
                link_tag: ".box-img a",
                link_attr: "href",
                title_tag: ".box-img a",
                title_attr: "title",
                category: "61ecba67f22c945535177981",
                source: "61ecbcf7f22c945535177992",
            },
            {
                url: "https://vietnamnet.vn/vn/cong-nghe/",
                parent_tag: ".box-subcate-style4",
                true_url: "https://vietnamnet.vn",
                thumbnail_tag: "img",
                thumbnail_attr: "src",
                link_tag: "a.thumb",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba67f22c945535177981",
                source: "61ecbd40f22c945535177994",
            },
            {
                url: "https://vnexpress.net/khoa-hoc",
                parent_tag: "article",
                true_url: "",
                thumbnail_tag: "img",
                thumbnail_attr: "data-src",
                link_tag: ".thumb-art a",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba67f22c945535177981",
                source: "61ecbdd6f22c945535177996",
            },
            // Kham pha the gioi
            {
                url: "https://nhandan.vn/thegioi",
                parent_tag: "article",
                true_url: "https://nhandan.vn",
                thumbnail_tag: ".box-img a img",
                thumbnail_attr: "data-src",
                link_tag: ".box-img a",
                link_attr: "href",
                title_tag: ".box-img a",
                title_attr: "title",
                category: "61ecba95f22c94553517798d",
                source: "61ecbcf7f22c945535177992",
            },
            {
                url: "https://vietnamnet.vn/vn/the-gioi/",
                parent_tag: ".box-subcate-style4",
                true_url: "https://vietnamnet.vn",
                thumbnail_tag: "img",
                thumbnail_attr: "src",
                link_tag: "a.thumb",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba95f22c94553517798d",
                source: "61ecbd40f22c945535177994",
            },
            {
                url: "https://vnexpress.net/the-gioi",
                parent_tag: "article",
                true_url: "",
                thumbnail_tag: "img",
                thumbnail_attr: "data-src",
                link_tag: ".thumb-art a",
                link_attr: "href",
                title_tag: "img",
                title_attr: "alt",
                category: "61ecba95f22c94553517798d",
                source: "61ecbdd6f22c945535177996",
            },
        ];
        let data = [];
        for (let i = 0; i < SOURCE.length; i++) {
            var options = {
                uri: SOURCE[i].url,
                transform: function (body) {
                    return cheerio.load(body);
                },
            };
    
            rp(options)
                .then(($) => {
                    $(SOURCE[i].parent_tag).each((index, el) => {
                        const thumbnail = $(el).find(SOURCE[i].thumbnail_tag).attr(SOURCE[i].thumbnail_attr);
                        const link =
                            SOURCE[i].true_url + $(el).find(SOURCE[i].link_tag).attr(SOURCE[i].link_attr);
                        const title = $(el).find(SOURCE[i].title_tag).attr(SOURCE[i].title_attr);
                        if (thumbnail && link && title) {
                            const article = new Article({
                                thumbnail: thumbnail,
                                link: link,
                                title: title,
                                releaseTime: Date.now(),
                                isShow: true,
                                category: SOURCE[i].category,
                                source: SOURCE[i].source,
                            });
                            Article.findOne({ link: link }).
                                then((result) => {
                                    if (!result) {
                                        data.push(article);
                                        article.save();
                                        console.log(article);
                                    } else {
                                        console.log("Da ton tai");
                                    }
                                })
                                .catch((error) => {
                                    console.log(error)
                                })
    
                        }
                    });
    
                })
                .catch(function (err) {
                    res.json({
                        status: "false",
                        msg: "Có lỗi xảy ra",
                        err: err,
                        success: false,
                    });
                    console.log(err);
                });
            if (i == SOURCE.length - 1) {
                res.json({
                    success: true,
                    msg: "Crawl thành công",
                });
            }
        }
    
    };
}



module.exports = new AdminRouter();