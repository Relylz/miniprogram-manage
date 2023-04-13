var express = require("express");
var router = express.Router();
const good = require("../controllers/goodController");

router.get("/getGood", good.getGood);
router.post("/getGoodDetail", good.getGoodDetail);

module.exports = router;
