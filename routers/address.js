var express = require("express");
var router = express.Router();
const address = require("../controllers/addressController");

// router.get("/getCart", cart);
// router.post("/getGoodDetail", good.getGoodDetail);
router.post("/getAddress", address.getaddress);
router.post("/getAddresslist", address.getaddresslist);

module.exports = router;
