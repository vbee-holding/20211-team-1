const express = require('express');
const crawlerController = require('../controller/CrawlerController');
const userController = require('../controller/userController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *       properties:
 *       example:
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The user managing API
 */

/**
 * @swagger
 * /api/v1/user/articles:
 *   get:
 *      summary: Returns the list of all articles
 *      tags: [Users]
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

router.get('/articles', crawlerController.crawlData);

/**
 * @swagger
 * /api/v1/user/articles/{category_id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Users]
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
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The category was not found
 */

router.get('/articles/:categoryId', userController.getArticlesByCategoryID);

/**
 * @swagger
 * /api/v1/user/articles:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

 //router.post('/articles/', crawlerController.crawlData);

/**
 * @swagger
 * /api/v1/admin/{id}:
 *  put:
 *    summary: Update the admin by the id
 *    tags: [Admins]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The admin id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Admin'
 *    responses:
 *      200:
 *        description: The admin was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Admin'
 *      404:
 *        description: The admin was not found
 *      500:
 *        description: Some error happened
 */

// router.put('/:adminId', AdminController.putAdmin);

/**
 * @swagger
 * /api/v1/admin/{id}:
 *   delete:
 *     summary: Remove the admin by id
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin id
 * 
 *     responses:
 *       200:
 *         description: The admin was deleted
 *       404:
 *         description: The admin was not found
 */

// router.delete('/:adminId', AdminController.deleteAdmin);

module.exports = router;
