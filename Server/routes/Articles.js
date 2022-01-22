const express = require("express");
const ArticleController = require("../controller/ArticleController");
const router = express.Router();

router.get("/", ArticleController.getArticles);
router.post("/", ArticleController.postArticle);
router.get("/:articleId", ArticleController.getArticle);
router.put("/:articleId", ArticleController.putArticle);
router.delete("/:articleId", ArticleController.deleteArticle);
// router.delete("/delete/all", ArticleController.deleteAllArticles);

module.exports = router;
