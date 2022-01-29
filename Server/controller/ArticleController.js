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
      res.status(400).json({
        success: false,
        error: err,
      });
    }
  }

  async postArticle(req, res, next) {
    try {
      const article = req.body;
      if(!article.category || !article.source || !article.thumbnail || !article.link || !article.title ) {
        res.json({
          success : false,
          message : "category or source is null",
        });
      }
      else if(await Article.findOne({ link : article.link })) {
        res.json({
          success : false,
          message : "Article exists"
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
        message : "Đã có lỗi xảy ra",
      });
      console.log(err);
    }
  }

  async putArticle(req, res, next) {
    const updatedFields = req.body;
    const { articleId } = req.params;
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        articleId,
        updatedFields,
        { new: true }
      );
      res.json({
        success: true,
        data: updatedArticle,
      });
    } catch (err) {
      res.status(400).json({
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
      res.status(400).json({
        success: false,
        error: err,
      });
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