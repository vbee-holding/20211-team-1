const express = require('express');
const AdminController = require('../controller/AdminController');
const Admin = require('../models/Admin');
const router = express.Router();
const Verify = require('../util/Verify');

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - email
 *         - password
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
 * components:
 *   schemas:
 *     ResetForm:
 *       type: object
 *       required:
 *         - password
 *         - newPassword
 *         - email
 *       properties:
 *          password:
 *            type: string
 *          newPassword:
 *            type: string
 *          email:
 *            type: string
 *       example:
 *         email: admin@gmail.com
 *         password: "123456"
 *         newPassword: "admin123"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Token:
 *       type: object
 *       required:
 *         - accessToken
 *         - refreshToken
 *       properties:
 *         accessToken:
 *           type: string
 *           description: Access token
 *         refreshToken:
 *           type: string
 *           description: Refresh token
 *       example:
 *         accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWYyYzkyMjFiZWFjNzc0MDdhNDk1MDEiLCJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJpYXQiOjE2NDQwNzk1OTksImV4cCI6MTY0NDA4MDQ5OX0.-9xpyRSSEjpkSDr7st9QSjCiGFsDYOahcHc9KJXvbk4"
 *         refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWYyYzkyMjFiZWFjNzc0MDdhNDk1MDEiLCJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJpYXQiOjE2NDQwNzk1OTksImV4cCI6MTY0NjY3MTU5OX0.yJVdBAOJctu3136aHrYIVNdY_ikL5MdIdXNIJN4oJbU"
 */

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: The admin managing API
 */

/**
 * @swagger
 * /api/v1/admin:
 *   get:
 *      summary: Returns the list of all admin
 *      tags: [Admin]
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


/**
 * @swagger
 * /api/v1/admin/crawl:
 *   get:
 *      summary: Make sever crawl data
 *      tags: [Admin]
 *      responses: 
 *          200: 
 *              description: The list of the admins
 *              content: 
 *                application/json:
 *                  schema:
 *                    type: object
 *                    properties:
 *                      success: 
 *                        type: boolean
 *                      msg:
 *                        type: string
 *                      err:
 *                        type: object
 *                        description: error
 *                      status:
 *                        type: boolean
 */


/**
 * @swagger
 * /api/v1/admin/login:
 *   post:
 *      summary: login for admin 
 *      tags: [Admin]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Admin'
 *      responses: 
 *        '200': 
 *          description: return accessToken and refreshToken 
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
 *                    "$ref": "#/components/schemas/Token"
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
 * /api/v1/admin/logout:
 *   post:
 *      summary: logout for admin 
 *      tags: [Admin]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Token'
 *      responses: 
 *        '200': 
 *          description: return true if logout success
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
 *                    description: description of logout
 */

/**
 * @swagger
 * /api/v1/admin/refresh:
 *   post:
 *      summary: Get new access token
 *      tags: [Admin]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Token'
 *      responses: 
 *        '200': 
 *          description: return new Token
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
 *                    "$ref": "#/components/schemas/Token"
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
 * /api/v1/admin/reset-password:
 *   post:
 *      security:
 *        - bearerAuth: []
 *      summary: Reset password
 *      tags: [Admin]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResetForm'
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
 *                  message:
 *                    type: string
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


router.get('/', AdminController.getAdmins);
router.get('/crawl', AdminController.crawlData);
router.post('/login', AdminController.logIn);
router.post('/logout', AdminController.logOut);
router.post('/refresh', AdminController.refreshToken);
router.post('/reset-password', Verify.verify, AdminController.resetPassword);
// router.delete('/:adminId', Verify.verify, AdminController.deleteAdmin);
module.exports = router;
