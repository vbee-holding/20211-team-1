const cheerio = require("cheerio");
const rp = require("request-promise");
const Article = require("../models/Article");

exports.crawlSportData = (req, res) => {
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
      category: "61f0017e804821068b64f1ac",
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
      category: "61f0017e804821068b64f1ac",
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
      category: "61f0017e804821068b64f1ac",
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
              .catch((error)=>{
                console.log(error)
              })

          }
        });

      })
      .catch(function (err) {
        res.json({
          status: "false",
        });
        console.log(err);
      });
  }
  res.json({
    data: data,
  });
};