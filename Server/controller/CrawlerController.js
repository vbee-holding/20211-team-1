const cheerio = require("cheerio");
const rp = require("request-promise");
const Article = require("../models/Article");

exports.crawlData = (req, res) => {
  var options = {
    uri: "https://nhandan.vn/thethao",
    transform: function (body) {
      return cheerio.load(body);
    },
  };
  rp(options)
    .then(($) => {
      let data = [];
      $("article").each((index, el) => {
        const thumbnail = $(el).find(".box-img a img").attr("data-src");
        const link = "https://nhandan.vn" + $(el).find(".box-img a").attr("href");
        const title = $(el).find(".box-img a").attr("title");
        const article= new Article({
            thumbnail:thumbnail,
            link:link,
            title:title,
            releaseTime: Date.now(),
            isShow:true,
            category: "61ecba5ef22c94553517797d",
            source: "61ecbcf7f22c945535177992"
        })
        data.push(article)
        article.save();
        console.log(article)
      });
      res.json({
        data: data,
      });
    })
    .catch(function (err) {
      res.json({
        status: "false",
      });
      console.log(err);
    });
};
