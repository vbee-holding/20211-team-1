const express = require('express');
const ArticleController = require('../controller/ArticleController');
const router = express.Router();
const Verify = require('../util/Verify');

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - thumbnail
 *         - link
 *         - title
 *         - category
 *         - source
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the article
 *         thumbnail:
 *           type: string
 *           description: Thumbnail of this article
 *         link:
 *           type: string
 *           description: Url of this article
 *         title:
 *           type: string
 *           description: Title of this article
 *         releaseTime:
 *           type: number
 *           description: Release time of this article
 *         isShow:
 *           type: boolean
 *           description: true if this article is show
 *         category:
 *           type: string
 *           description: Category of this article
 *         source:
 *           type: string
 *           description: Source of this article
 *         numOfViews:
 *           type: number
 *           description: Number of views
 *         __v: 
 *           type: number
 *       example:
 *          _id: "61f69f7a07c170ca63a989f2"
 *          thumbnail: "https://img.nhandan.com.vn/resize/320x-/Files/Images/2022/01/28/anhdt-1643364422870.jpg"
 *          link: "https://nhandan.vn/tin-tuc-giao-duc/bo-giao-duc-va-dao-tao-thong-tin-ve-viec-mo-cua-truong-hoc-sau-tet-684254/"
 *          title: "Bộ Giáo dục và Đào tạo thông tin về việc mở cửa trường học sau Tết"
 *          releaseTime: 1643552634529
 *          isShow: false
 *          category: "61f00169804821068b64f1a8"
 *          source: "61ecbcf7f22c945535177992"
 *          numOfViews: 0
 *          __v: 0
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     ArticleRequest:
 *       type: object
 *       required:
 *         - thumbnail
 *         - link
 *         - title
 *         - category
 *         - source
 *       properties:
 *         thumbnail:
 *           type: string
 *           description: Thumbnail of this article
 *         link:
 *           type: string
 *           description: Url of this article
 *         title:
 *           type: string
 *           description: Title of this article
 *         releaseTime:
 *           type: number
 *           description: Release time of this article
 *         isShow:
 *           type: boolean
 *           description: true if this article is show
 *         category:
 *           type: string
 *           description: Category of this article
 *         source:
 *           type: string
 *           description: Source of this article
 *         numOfViews:
 *           type: number
 *           description: Number of views
 *       example:
 *          thumbnail: "https://img.nhandan.com.vn/resize/320x-/Files/Images/2022/01/28/anhdt-1643364422870.jpg"
 *          link: "https://nhandan.vn/tin-tuc-giao-duc/bo-giao-duc-va-dao-tao-thong-tin-ve-viec-mo-cua-truong-hoc-sau-tet-684254/"
 *          title: "Bộ Giáo dục và Đào tạo thông tin về việc mở cửa trường học sau Tết"
 *          releaseTime: 1643552634529
 *          isShow: false
 *          category: "61f00169804821068b64f1a8"
 *          source: "61ecbcf7f22c945535177992"
 *          numOfViews: 0
 */

/**
 * @swagger
 * tags:
 *   name: Article
 *   description: The article managing API
 */


/**
 * @swagger
 * /api/v1/articles/search:
 *   get:
 *     summary: Returns the list of all article have text in title
 *     tags: [Article]
 *     responses: 
 *       '200': 
 *         description: The list of all article
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: true if request success
 *                 data:
 *                   type: array
 *                   items:
 *                     "$ref": "#/components/schemas/Article"
 *                 err:
 *                   type: object
 *                   description: error if success false 
 */


/**
 * @swagger
 * /api/v1/articles/:
 *   get:
 *     summary: Returns the list of all article 
 *     tags: [Article]
 *     responses: 
 *       '200': 
 *         description: The list of all article
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: true if request success
 *                 count:
 *                   type: number
 *                   description: number of all articles
 *                 data:
 *                   type: array
 *                   items:
 *                     "$ref": "#/components/schemas/Article"
 *                 err:
 *                   type: object
 *                   description: error if success false 
 */

/**
 * @swagger
 * /api/v1/articles/{articleId}:
 *   get:
 *      summary: get an article have id in path
 *      tags: [Article]
 *      parameters:
 *        - in: path
 *          name: articleId
 *          schema:
 *            type: string
 *          required: true
 *          description: The article id
 *      responses: 
 *        '200': 
 *          description: return an article have id in path
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  data:
 *                    type: object
 *                    "$ref": "#/components/schemas/Article"
 *        '500': 
 *          description: sever error
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  error:
 *                    type: object
 *                    description: description of error
 */

/**
 * @swagger
 * /api/v1/articles/:
 *   post:
 *      security:
 *        - bearerAuth: []
 *      summary: create an article  
 *      tags: [Article]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ArticleRequest'
 *      responses: 
 *        '200': 
 *          description: request false if success is false else return an article created 
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: true if request success
 *                  data:
 *                    type: object
 *                    "$ref": "#/components/schemas/Article"
 *                  err:
 *                    type: object
 *                    description: error if success false 
 *                  message:
 *                    type: string
 *                    description: description of error
 */

/**
 * @swagger
 * /api/v1/articles/{articleId}:
 *   put:
 *      security:
 *        - bearerAuth: []
 *      summary: create an article  
 *      tags: [Article]
 *      parameters:
 *        - in: path
 *          name: articleId
 *          schema:
 *            type: string
 *          required: true
 *          description: The article id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ArticleRequest'
 *      responses: 
 *        '200': 
 *          description: return new article
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  data:
 *                    type: object
 *                    "$ref": "#/components/schemas/ArticleRequest"
 *        '400': 
 *          description: bad request
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  message:
 *                    type: string
 *                    description: description of error
 *        '500': 
 *          description: sever error
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  error:
 *                    type: object
 *                    description: description of error
 */

/**
 * @swagger
 * /api/v1/articles/hide:
 *   get:
 *      summary: make sever hide old article
 *      tags: [Article]
 *      responses: 
 *        '200': 
 *          description: return message
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  message:
 *                    type: string
 *                    description: description of success
 *        '500': 
 *          description: bad request
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  error:
 *                    type: object
 *                    description: description of error
 */


/**
 * @swagger
 * /api/v1/articles/{articleId}:
 *   delete:
 *      security:
 *        - bearerAuth: []
 *      summary: delete one article
 *      tags: [Article]
 *      parameters:
 *        - in: path
 *          name: articleId
 *          schema:
 *            type: string
 *          required: true
 *          description: The article id
 *      responses: 
 *        '200': 
 *          description: message
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  message:
 *                    type: string
 *                    description: description of success
 *        '500': 
 *          description: sever error
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success: 
 *                    type: boolean
 *                    description: true if request success
 *                  error:
 *                    type: object
 *                    description: description of error
 */


/**
 * @swagger
 * /api/v1/articles/crawl:
 *   post:
 *      summary: Post article without auth 
 *      tags: [Article]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ArticleRequest'
 *      responses: 
 *        '200': 
 *          description: request false if success is false else return an article created 
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: true if request success
 *                  data:
 *                    type: object
 *                    "$ref": "#/components/schemas/Article"
 *                  err:
 *                    type: object
 *                    description: error if success false 
 *                  message:
 *                    type: string
 *                    description: description of error if success false
 */

router.get('/search', ArticleController.searchArticle);
router.get('/', ArticleController.getArticles);
router.post('/', Verify.verify, ArticleController.postArticle);
router.post('/crawl', ArticleController.postArticleWithoutAuth);
router.get('/hide', ArticleController.hideArticle);
router.get('/:articleId', ArticleController.getArticle);
router.put('/:articleId', Verify.verify, ArticleController.putArticle);
router.delete('/:articleId', Verify.verify, ArticleController.deleteArticle);
// router.delete('/delete/all', ArticleController.deleteAllArticles);

module.exports = router;