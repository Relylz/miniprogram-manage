var express = require("express");
var router = express.Router();
const usercenter = require("../controllers/userController");

router.get("/getUsercenter", usercenter.getUserCenter);
router.get("/getUserDetail", usercenter.getUserDetail);

module.exports = router;
