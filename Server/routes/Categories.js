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
 *       properties:
 *       example:
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The category managing API
 */

router.get("/", CategoryController.getCategories);
router.get("/:categoryId", CategoryController.getCategory);
router.post("/", Verify.verify, CategoryController.postCategory);
router.put("/:categoryId", Verify.verify, CategoryController.putCategory);
router.delete("/:categoryId", Verify.verify, CategoryController.deleteCategory);
/**
 * @swagger
 * /api/v1/categories/details:
 *   get:
 *      summary: Returns the list of all articles details
 *      tags: [Categories]
 *      responses: 
 *          200: 
 *              description: The list of all articles
 *              content: 
 *                application/json:
 *                      schema:
 *                         type: array
 *                         items: 
 *                          - out: path
 *                          
 *                          
 */
router.get("/details", CategoryController.getAllCategoryDetail)
/**
 * @swagger
 * /api/v1/categories/details/{category_id}:
 *   get:
 *     summary: Get the category detail by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: category_id
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
router.get("/details/:categoryId", CategoryController.getCategoryDetailByID)

module.exports = router;
