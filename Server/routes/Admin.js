const express = require('express');
const AdminController = require('../controller/AdminController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the admin
 *         email:
 *           type: string
 *           description: The admin email
 *         password:
 *           type: string
 *           description: The admin password
 *       example:
 *         email: admin@gmail.com
 *         password: "123456"
 */

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admin managing API
 */

/**
 * @swagger
 * /api/v1/admin:
 *   get:
 *      summary: Returns the list of all admin
 *      tags: [Admins]
 *      responses: 
 *          200: 
 *              description: The list of the admins
 *              content: 
 *                application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Admin'
 */

router.get('/', AdminController.getAdmins);

/**
 * @swagger
 * /api/v1/admin/{id}:
 *   get:
 *     summary: Get the admin by id
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The admin id
 *     responses:
 *       200:
 *         description: The admin description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: The admin was not found
 */

router.get('/:adminId', AdminController.getAdmin);

/**
 * @swagger
 * /api/v1/admin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Some server error
 */

router.post('/', AdminController.postAdmin);

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

router.put('/:adminId', AdminController.putAdmin);

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

router.delete('/:adminId', AdminController.deleteAdmin);

module.exports = router;
