const express = require('express');
const ArticleController = require('../controller/ArticleController');
const router = express.Router();
const Verify = require('../util/Verify');

router.get('/', ArticleController.getArticles);
router.post('/', Verify.verify, ArticleController.postArticle);
router.get('/:articleId', ArticleController.getArticle);
router.put('/:articleId', Verify.verify, ArticleController.putArticle);
router.delete('/:articleId', Verify.verify, ArticleController.deleteArticle);
// router.delete('/delete/all', ArticleController.deleteAllArticles);

module.exports = router;
