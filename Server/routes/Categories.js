const express = require('express');
const router = express.Router();
const CategoryController = require ('../controller/CategoryController')

router.get('/', CategoryController.getCategories);
router.get('/:categoryId', CategoryController.getCategory);
router.post('/', CategoryController.postCategory);
router.put('/:categoryId', CategoryController.putCategory);
router.delete('/:categoryId', CategoryController.deleteCategory);

module.exports = router;
