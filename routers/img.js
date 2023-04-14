// 生成解析url
var express = require("express");

var router = express.Router();

const img = require("../controllers/imgController");

router.get("/:imageName", img.getImg);

module.exports = router;
