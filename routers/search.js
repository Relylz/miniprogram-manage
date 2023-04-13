var express = require("express");

var router = express.Router();

const search = require("../controllers/searchHistoryController");
const result = require("../controllers/searchResultController");

router.get("/getSearchHistory", search.getSearchHistory);
router.get("/getSearchPopular", search.getSearchPopular);

module.exports = router;
