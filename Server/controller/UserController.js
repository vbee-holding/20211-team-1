const Article = require("../models/Article");
const Category = require("../models/Category");

exports.getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({isShow:true})
      .populate("category")
      .populate("source");
    res.json({
      success: true,
      count: articles.length,
      data: {...articles},
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
};

exports.getArticlesByCategoryID = async (req, res, next) => {
  try {
    console.log(req.params);
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    const articles = await Article.find({
      category: categoryId,
      isShow:true
    }).populate('source');
    console.log(category);
    res.json({
      success: true,
      data: {...category._doc, articles: articles, counts:articles.length },
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};
