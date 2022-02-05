const Article = require("../models/Article");

class ArticleRouter {
  async getArticles(req, res, next) {
    try {
      const articles = await Article.find();
      res.json({
        success: true,
        count: articles.length,
        data: articles,
      });
    } catch (err) {
      res.json({
        success: false,
        error: err,
      });
    }
  }

  async getArticle(req, res, next) {
    const { articleId } = req.params;
    try {
      const article = await Article.findById(articleId);
      res.json({
        success: true,
        data: article,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async postArticle(req, res, next) {
    try {
      const article = req.body;
      if (!article.category || !article.source || !article.thumbnail || !article.link || !article.title) {
        res.json({
          success: false,
          message: "category và source là bắt buộc",
        });
      }
      else if (await Article.findOne({ link: article.link })) {
        res.json({
          success: false,
          message: "Bài báo đã tồn tại"
        });
      }
      else {
        await Article.create(article);
        res.json({
          success: true,
          data: article,
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
        message: "Đã có lỗi xảy ra",
      });
      console.log(err);
    }
  }


  async postArticleWithoutAuth(req, res, next) {
    try {
      const article = req.body;
      Article.findOne({ link: article.link }).then((result) => {
        if (!result) {
          const newArticle = new Article(article)
          newArticle.save();
          res.json({
            success: true,
            data: newArticle,
          });
        } else {
          res.json({
            success: false,
            message: "This article has existed"
          });
        }
      }).catch(error => {
        console.log(error)
      })

    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
        message: "Đã có lỗi xảy ra",
      });
      console.log(err);
    }
  }


  async searchArticle(req, res, next) {
    try {
      const { text } = req.query;
      const articles = await Article.find({ isShow: true })
      const result =[];
      for(let i=0;i<articles.length;i++){
        if(articles[i].title.includes(text)){
          result.push(articles[i]);
        }
      }
      res.json({
        success: true,
        data: result
      })
    } catch (error) {
      res.json({
        success: false,
        error: error
      })
    }
  }

  async putArticle(req, res, next) {
    const updatedFields = req.body;
    const { articleId } = req.params;
    try {
      const check = await Article.findOne({ link: updatedFields.link })
      if (check && (check._id.toString() !== articleId)) {
        res.status(400).json({
          success: false,
          message: "Link bài báo đã tồn tại"
        });
        return;
      }
      else {
        const updatedArticle = await Article.findByIdAndUpdate(
          articleId,
          updatedFields,
          { new: true }
        );
        res.json({
          success: true,
          data: updatedArticle,
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async deleteArticle(req, res, next) {
    const { articleId } = req.params;
    try {
      await Article.findByIdAndDelete(articleId);
      res.json({
        success: true,
        message: "Delete successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async hideArticle(req, res, next) {
    try {
      const time = Date.now() - 1800000
      console.log(time)
      Article.updateMany({ isShow: true, releaseTime: { $lt: time } }, { isShow: false })
        .then((result) => {
          console.log(result)
          res.json({
            success: true,
            message: "Hide articles successfully",
          })
        }).catch(error => {
          res.status(500).json({
            success: false,
            error: error
          });
        })
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error
      })
    }
  }

  // async deleteAllArticles(req, res, next) {
  //   try {
  //     const article = await Article.find();

  //     if (article.length > 0) {
  //       article.map(async (x) => {
  //         await Article.findByIdAndDelete(x._id);
  //       });
  //     }
  //     res.json({
  //       success: true,
  //       message: "Delete all successfully",
  //     });
  //   } catch (err) {
  //     res.json({
  //       success: false,
  //       error: err,
  //     });
  //   }
  // }
}

module.exports = new ArticleRouter();