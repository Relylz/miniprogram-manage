var express = require("express");
var router = express.Router();
const applyService = require("../controllers/orderController/applyService");
const orderConfirm = require("../controllers/orderController/orderConfirm");
const orderDetail = require("../controllers/orderController/orderDetail");
const orderList = require("../controllers/orderController/orderList");
const orderSubmitComment = require("../controllers/orderController/orderSubmitComment");

router.post("/getApplyReasonList", applyService.getApplyReasonList); //搞定
router.post("/getApplyService", applyService.getApplyService); //搞定
router.post("/getRightsPreview", applyService.getRightsPreview); //暂定
router.post("/getSettleDetail", orderConfirm.getSettleDetail); //解决
router.post("/getCommitPay", orderConfirm.getCommitPay); //解决
router.post("/getSupplementInvoice", orderConfirm.getSupplementInvoice); //可以不动
router.post("/getBusinessTime", orderDetail.getBusinessTime); //解决
router.post("/getOrderDetail", orderDetail.getOrderDetail); //解决
router.post("/getOrders", orderList.getOrders); //已解决
router.post("/getOrdersCount", orderList.getOrdersCount); //解决
router.post("/getCommentGoods", orderSubmitComment.getCommentGoods);

module.exports = router;
