const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/CategoryController");
const Verify = require("../util/Verify");

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: Name of this category
 *       example:
 *          _id: "61f69f7a07c170ca63a989f2"
 *          name: "Sức khỏe"
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     CategoryRequest:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Name of this category
 *       example:
 *          name: "Sức khỏe"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CategoryUser:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: Name of this category
 *         count:
 *           type: number
 *           description: Number of article is show in this category
 *       example:
 *          _id: "61f69f7a07c170ca63a989f2"
 *          name: "Sức khỏe"
 *          count: 10
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CategoryAdmin:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: Name of this category
 *         count:
 *           type: number
 *           description: Number of article is show in this category
 *         countShowed:
 *           type: number
 *           description: Number of all article in this category
 *       example:
 *          _id: "61f69f7a07c170ca63a989f2"
 *          name: "Sức khỏe"
 *          count: 10
 *          countShowed: 5
 */


/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The category managing API
 */

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Returns the list of all category
 *     tags: [Category]
 *     responses: 
 *       '200': 
 *         description: The list of all category
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
 *                     "$ref": "#/components/schemas/CategoryUser"
 *       '500': 
 *         description: sever error
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: true if request success
 *                 err:
 *                   type: object
 *                   description: error if success false 
 */

/**
 * @swagger
 * /api/v1/categories/admin:
 *   get:
 *     summary: Returns the list of all article have text in title
 *     tags: [Category]
 *     responses: 
 *       '200': 
 *         description: The list of all category
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
 *                     "$ref": "#/components/schemas/CategoryAdmin"
 *       '500': 
 *         description: sever error
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: true if request success
 *                 err:
 *                   type: object
 *                   description: error if success false 
 */

/**
 * @swagger
 * /api/v1/categories/{categoryId}:
 *   get:
 *      summary: get an category have the id in path
 *      tags: [Category]
 *      parameters:
 *        - in: path
 *          name: categoryId
 *          schema:
 *            type: string
 *          required: true
 *          description: The category id
 *      responses: 
 *        '200': 
 *          description: return an category have the id in path
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
 *                    "$ref": "#/components/schemas/Category"
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
 * /api/v1/categories/:
 *   post:
 *      security:
 *        - bearerAuth: []
 *      summary: create a category  
 *      tags: [Category]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryRequest'
 *      responses: 
 *        '200': 
 *          description: return new category
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
 *                    "$ref": "#/components/schemas/CategoryRequest"
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
 * /api/v1/categories/{categoryId}:
 *   put:
 *      security:
 *        - bearerAuth: []
 *      summary: create a category  
 *      parameters:
 *        - in: path
 *          name: categoryId
 *          schema:
 *            type: string
 *          required: true
 *          description: The category id
 *      tags: [Category]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryRequest'
 *      responses: 
 *        '200': 
 *          description: return new category
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
 *                    "$ref": "#/components/schemas/CategoryRequest"
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
 * /api/v1/categories/{categoryId}:
 *   delete:
 *      security:
 *        - bearerAuth: []
 *      summary: delete one category
 *      tags: [Category]
 *      parameters:
 *        - in: path
 *          name: categoryId
 *          schema:
 *            type: string
 *          required: true
 *          description: The category id
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
 * /api/v1/categories/details/{categoryId}:
 *   get:
 *     summary: Get the category detail by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The articles get by category id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: The category was not found
 */

router.get("/", CategoryController.getCategories);
router.get("/admin", CategoryController.getCategoriesAdmin);
router.get("/:categoryId", CategoryController.getCategory);
router.post("/", Verify.verify, CategoryController.postCategory);
router.put("/:categoryId", Verify.verify, CategoryController.putCategory);
router.delete("/:categoryId", Verify.verify, CategoryController.deleteCategory);
router.get("/details", CategoryController.getAllCategoryDetail)
router.get("/details/:categoryId", CategoryController.getCategoryDetailByID)


module.exports = router;
