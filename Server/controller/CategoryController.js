const Article = require("../models/Article");
const Category = require("../models/Category");
const { CATEGORIES } = require("../util/CATEGORIES");

class CategoryRouter {
  async getCategories(req, res, next) {
    try {
      const categories = await Category.find();
      const result =[];
      for(let i=0;i<categories.length;i++){
        const articles = await Article.find({category: categories[i]._id, isShow:true});
        result.push({
          _id: categories[i]._id,
          name:categories[i].name,
          count: articles.length
        })
      }
      res.json({
        success: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async getCategoriesAdmin(req, res, next) {
    try {
      const categories = await Category.find();
      const result =[];
      for(let i=0;i<categories.length;i++){
        const articles = await Article.find({category: categories[i]._id});
        const articlesShowed =  await Article.find({category: categories[i]._id, isShow:true});
        result.push({
          _id: categories[i]._id,
          name:categories[i].name,
          count: articles.length,
          countShowed: articlesShowed.length,
        })
      }
      res.json({
        success: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async getCategory(req, res, next) {
    const { categoryId } = req.params;
    try {
      const category = await Category.findById(categoryId);
      res.json({
        success: true,
        data: category,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async postCategory(req, res, next) {
    var category = req.body;
    if (category.name) category.name = category.name.toLowerCase();
    try {
      let check = await Category.findOne({ name: category.name });
      if (check) {
        res.status(400).json({
          success: false,
          message: "Tồn tại chuyên mục khác có cùng tên",
        });
      } 
      else {
        await Category.create(category);

        res.json({
          success: true,
          data: await Category.findOne({ name: category.name }),
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
      console.log(err);
    }
  }

  async putCategory(req, res, next) {
    const updatedFields = req.body;
    const { categoryId } = req.params;

    try {
      const check = await Category.findOne({ name : updatedFields.name })
      if(check && (check._id.toString() !== categoryId)){
          res.status(400).json({
              success : false,
              message : "Tồn tại chuyên mục khác có cùng tên"
          });
          return;
      }
      else{
        const updatedCategory = await Category.findByIdAndUpdate(
          categoryId,
          updatedFields,
          { new: true }
        );
        res.json({
          success: true,
          data: updatedCategory,
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async deleteCategory(req, res, next) {
    const { categoryId } = req.params;
    try {
      const articles = await Article.find({ category : categoryId });
      if(articles.length !== 0) {
        res.status(400).json({
          success: false,
          message: "Vui lòng xóa hết các bài báo thuộc chuyên mục trước khi xóa chuyên mục này",
        });
      }
      else {
        await Category.findByIdAndDelete(categoryId);
        res.json({
          success: true,
          message: "Delete successfully",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  // async deleteAllCategory(req, res, next) {
  //   try {
  //     const categories = await Category.find();
  //     categories.map(async (x) => {
  //       await Category.findByIdAndDelete(x._id);
  //     });

  //     res.json({
  //       success: true,
  //       message: "Delete all successfully",
  //     });
  //   } catch (err) {
  //     res.status(400).json({
  //       success: false,
  //       error: err,
  //     });
  //   }
  // }

  async getAllCategoryDetail(){
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
      console.log(err)
      res.json({
        success: false,
        error: err,
      });
    }
  }

  async getCategoryDetailByID(req, res, next){
    try {
      const { categoryId } = req.params;
      const category = await Category.findById(categoryId);
      if (categoryId == CATEGORIES.hot.id) { // Neu la bao nong
        const articles = await Article.find({ isShow: true }).populate('source').sort({ numOfViews: 'desc' }).limit(100);
        res.json({
          success: true,
          data: { ...category._doc, articles: articles, counts: articles.length },
        })
      } else if (categoryId == CATEGORIES.new.id) { // Neu la bao hot
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
  }

}



module.exports = new CategoryRouter();