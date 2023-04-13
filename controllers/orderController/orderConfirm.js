const { mockIp, mockReqId } = require("../../utils/mock");

/** 获取结算mock数据 */
function mockFetchSettleDetail(params) {
  const { genSettleDetail } = require("../../model/order/orderConfirm");

  return genSettleDetail(params);
}

/** 提交mock订单 */
function mockDispatchCommitPay() {
  return {
    data: {
      isSuccess: true,
      tradeNo: "350930961469409099",
      payInfo: "{}",
      code: null,
      transactionId: "E-200915180100299000",
      msg: null,
      interactId: "15145",
      channel: "wechat",
      limitGoodsList: null,
    },
    code: "Success",
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 891,
    success: true,
  };
}

/** 获取结算数据 */
// export function fetchSettleDetail(params) {
//   if (config.useMock) {
//     return mockFetchSettleDetail(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

const getSettleDetail = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockFetchSettleDetail(params));
};
/* 提交订单 */
// export function dispatchCommitPay(params) {
//   if (config.useMock) {
//     return mockDispatchCommitPay(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }
const getCommitPay = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockDispatchCommitPay(params));
};

/** 开发票 */
// export function dispatchSupplementInvoice() {
//   if (config.useMock) {
//     const { delay } = require('../_utils/delay');
//     return delay();
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

const getSupplementInvoice = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockDispatchCommitPay(params));
};

module.exports = {
  getSettleDetail,
  getCommitPay,
  getSupplementInvoice,
};
