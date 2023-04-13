var express = require("express");
var router = express.Router();
const swiper = require("../controllers/swiperController");

router.get("/getSwiper", swiper.getSwiper);

module.exports = router;
