var express = require("express");
var router = express.Router();
const applyService = require("../controllers/orderController/applyService");
const orderConfirm = require("../controllers/orderController/orderConfirm");
const orderDetail = require("../controllers/orderController/orderDetail");
const orderList = require("../controllers/orderController/orderList");
const orderSubmitComment = require("../controllers/orderController/orderSubmitComment");

router.post("/getApplyReasonList", applyService.getApplyReasonList);
router.post("/getApplyService", applyService.getApplyService);
router.post("/getRightsPreview", applyService.getRightsPreview);
router.post("/getSettleDetail", orderConfirm.getSettleDetail);
router.post("/getCommitPay", orderConfirm.getCommitPay);
router.post("/getSupplementInvoice", orderConfirm.getSupplementInvoice);
router.post("/getBusinessTime", orderDetail.getBusinessTime);
router.post("/getOrderDetail", orderDetail.getOrderDetail);
router.post("/getOrders", orderList.getOrders);
router.post("/getOrdersCount", orderList.getOrdersCount);
router.post("/getCommentGoods", orderSubmitComment.getCommentGoods);

module.exports = router;
