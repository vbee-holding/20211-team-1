const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/CategoryController");
const Verify = require("../util/Verify");

router.get("/", CategoryController.getCategories);
router.get("/:categoryId", CategoryController.getCategory);
router.post("/", Verify.verify, CategoryController.postCategory);
router.put("/:categoryId", Verify.verify, CategoryController.putCategory);
router.delete("/:categoryId", Verify.verify, CategoryController.deleteCategory);
router.get("/details", CategoryController.getAllCategoryDetail)
router.get("/details/:categoryId", CategoryController.getCategoryDetailByID)

module.exports = router;
