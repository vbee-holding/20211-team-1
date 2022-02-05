const express = require('express');
const router = express.Router();
const SourceController = require ('../controller/SourceController');
const Verify = require ('../util/Verify');

/**
 * @swagger
 * components:
 *   schemas:
 *     SourceResponse:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the source
 *         name:
 *           type: string
 *           description: Name of this source
 *         logo:
 *           type: string
 *           description: Logo of this source
 *         url:
 *           type: string
 *           description: Url of this source
 *         __v:
 *           type: number
 *       example:
 *          _id: "61f69f7a07c170ca63a989f2"
 *          name: "Hà Nội Mới"
 *          logo: "https://photo-baomoi.zadn.vn/a05eef313272db2c8263.png"
 *          url: "http://hanoimoi.com.vn/"
 *          __v: 0
 *          
 *          
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SourceRequest:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Name of this source
 *         logo:
 *           type: string
 *           description: Logo of this source
 *         url:
 *           type: string
 *           description: Url of this source
 *       example:
 *          name: "Hà Nội Mới"
 *          logo: "https://photo-baomoi.zadn.vn/a05eef313272db2c8263.png"
 *          url: "http://hanoimoi.com.vn/"
 */

/**
 * @swagger
 * tags:
 *   name: Source
 *   description: The source managing API
 */


/**
 * @swagger
 * /api/v1/sources:
 *   get:
 *     summary: Returns the list of all source
 *     tags: [Source]
 *     responses: 
 *       '200': 
 *         description: The list of all source
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
 *                     "$ref": "#/components/schemas/SourceResponse"
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
 * /api/v1/sources/{sourcesId}:
 *   get:
 *      summary: get an source have the id in path
 *      tags: [Source]
 *      parameters:
 *        - in: path
 *          name: sourcesId
 *          schema:
 *            type: string
 *          required: true
 *          description: The source id
 *      responses: 
 *        '200': 
 *          description: return an source have the id in path
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
 *                    "$ref": "#/components/schemas/SourceResponse"
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
 * /api/v1/sources/:
 *   post:
 *      security:
 *        - bearerAuth: []
 *      summary: create a new source  
 *      tags: [Source]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SourceRequest'
 *      responses: 
 *        '200': 
 *          description: return new source
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
 *                    "$ref": "#/components/schemas/SourceRequest"
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
 * /api/v1/sources/{sourceId}:
 *   put:
 *      security:
 *        - bearerAuth: []
 *      summary: update one source  
 *      parameters:
 *        - in: path
 *          name: sourceId
 *          schema:
 *            type: string
 *          required: true
 *          description: The source id
 *      tags: [Source]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SourceRequest'
 *      responses: 
 *        '200': 
 *          description: return new source
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
 *                    "$ref": "#/components/schemas/SourceRequest"
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
 * /api/v1/sources/{sourceId}:
 *   delete:
 *      security:
 *        - bearerAuth: []
 *      summary: delete one source
 *      tags: [Source]
 *      parameters:
 *        - in: path
 *          name: sourceId
 *          schema:
 *            type: string
 *          required: true
 *          description: The source id
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




router.get('/', SourceController.getSources);
router.get('/:sourceId', SourceController.getSource);
router.post('/', Verify.verify, SourceController.postSource);
router.put('/:sourceId', Verify.verify, SourceController.putSource);
router.delete('/:sourceId', Verify.verify, SourceController.deleteSource);


module.exports = router;