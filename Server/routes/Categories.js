const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/CategoryController");

router.get("/", CategoryController.getCategories);
router.get("/:categoryId", CategoryController.getCategory);
router.post("/", CategoryController.postCategory);
router.put("/:categoryId", CategoryController.putCategory);
router.delete("/:categoryId", CategoryController.deleteCategory);
// router.delete("/delete/all", CategoryController.deleteAllCategory);

module.exports = router;
