var express = require("express");
var router = express.Router();

const category = require("../controllers/categoryListController");

router.get("/getcategory", category.getCategoryList);

module.exports = router;
