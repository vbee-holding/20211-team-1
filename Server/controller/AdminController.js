const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

class AdminRouter {
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

    constructor() {
        this.refreshTokens = [];
    }

    generateAccessToken (admin) {
        try{
            return jwt.sign({_id : admin._id, email : admin.email}, process.env.SECRET_KEY_TOKEN, {expiresIn : "15m"});
        }
        catch (err) {
            console.log(err);
        }
    }
 
    generateRefreshToken (admin) {
        try{
            return jwt.sign({_id : admin._id, email : admin.email}, process.env.SECRET_KEY_REFRESHTOKEN, {expiresIn : "30d"});
        }
        catch (err) {
            console.log(err);
        }
    }


    logIn = async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const admin =  await Admin.find({
                email : email,
                password : password
            });
            if(admin.length >= 1) {
                const accessToken = this.generateAccessToken(admin);
                const refreshToken = this.generateRefreshToken(admin);
 
                this.refreshTokens.push(refreshToken);
                res.json({
                    success : true,
                    data : {
                        accessToken : accessToken,
                        refreshToken : refreshToken,
                    },
                });
            }
            else {
                res.json({
                    success : false,
                    error : "email or password incorrect",
                });
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                success: false,
                error : err,
            })
        }

    }

    refreshToken = async (req, res, next) => {
        try {
            const { refreshToken } = req.body;
            if(!refreshToken) return res.status(401).json({
                success : false,
                data : {
                    message : "you are not authenticated ",
                }
            });
            
            if(!this.refreshTokens.includes(refreshToken)) return res.status(403).json({
                success : false,
                data : {
                    message : "Refresh token is not valid",
                },
            });
            
            jwt.verify(refreshToken, "myRefreshSecretKey", (err, admin) => {
                if(err) {
                    res.status(400).json({
                        success: false,
                        error : err,
                    })
                }
            
                this.refreshTokens = this.refreshTokens.filter((token) => token !== refreshToken);
                const newRefreshToken = this.generateRefreshToken(admin);
                const newAccessToken = this.generateAccessToken(admin);
                this.refreshTokens.push(newRefreshToken);
        
                res.json({
                    success : true,
                    data : {
                        accessToken : newAccessToken,
                        refreshToken : newRefreshToken,
                    }
                })
            })
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                success : false,
                err : err,
            })
        }
    }

    
    logOut = async (req, res, next) => {
        const { refreshToken } = req.body;
        this.refreshTokens = this.refreshTokens.filter(token => token !== refreshToken);
        res.json({
            success : true,
            data : {
                message : "You loged out succesfully"
            },
        });
    }

    resetPassword = async (req, res, next) => {
        const { password, newPassword, email } = req.body;
        try {
            const admin =  await Admin.find({
                email : email,
                password : password
            });
            if(admin.length >= 1) {
                const admin = await Admin.findOneAndUpdate( email , {
                    email : email,
                    password : newPassword,
                });
                res.json({
                    success: true,
                    data: admin,
                });
            }
            else res.json({
                success: false,
                message: "Sai mật khẩu"
            })
        }
        catch (err) {
            res.status(400).json({
                success: false,
                error : err,
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

  //   const saltRounds = 10;
  //   const salt = bcrypt.genSaltSync(saltRounds);

  //   admin.password = bcrypt.hashSync(admin.password, salt);

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
}

module.exports = new AdminRouter();