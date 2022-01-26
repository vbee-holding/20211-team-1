const Article = require("../models/Article");
const Category = require("../models/Category");

exports.getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({ isShow: true })
      .populate("category")
      .populate("source");
    res.json({
      success: true,
      count: articles.length,
      data: { ...articles },
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
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    
    
    if (categoryId == "61f00169804821068b64f1a8") { // Neu la bao nong
      const articles = await Article.find({ isShow: true }).populate('source').sort({ numOfViews: 'desc' }).limit(100);
      res.json({
        success: true,
        data: { ...category._doc, articles: articles, counts: articles.length },
      })
    } else if (categoryId == "61f0017e804821068b64f1ac") { // Neu la bao hot
      const articles = await Article.find({ isShow: true }).populate('source').sort({ releaseTime: -1 }).limit(100);
      res.json({
        success: true,
        data: { ...category._doc, articles: articles, counts: articles.length },
      })
    } else {
      const articles = await Article.find({
        category: categoryId,
        isShow: true
      }).populate('source').sort({ releaseTime: 'desc' });
      res.json({
        success: true,
        data: { ...category._doc, articles: articles, counts: articles.length },
      });
    }
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};