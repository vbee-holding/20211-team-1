const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/CategoryController");
const Verify = require("../util/Verify");

router.get("/", CategoryController.getCategories);
router.get("/:categoryId", CategoryController.getCategory);
router.post("/", Verify.verify, CategoryController.postCategory);
router.put("/:categoryId", Verify.verify, CategoryController.putCategory);
router.delete("/:categoryId", Verify.verify, CategoryController.deleteCategory);
// router.delete("/delete/all", CategoryController.deleteAllCategory);

module.exports = router;
