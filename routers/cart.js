var express = require("express");
var router = express.Router();
const cart = require("../controllers/cartController");

// router.get("/getCart", cart);
// router.post("/getGoodDetail", good.getGoodDetail);
router.post("/getCart", cart.getCartGroupData);

module.exports = router;
