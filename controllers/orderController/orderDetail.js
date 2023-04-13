/** 获取订单详情mock数据 */
function mockFetchOrderDetail(params) {
  const { genOrderDetail } = require("../../model/order/orderDetail");

  return genOrderDetail(params);
}

/** 获取订单详情数据 */
// export function fetchOrderDetail(params) {
//   if (config.useMock) {
//     return mockFetchOrderDetail(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

const getOrderDetail = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockFetchOrderDetail(params));
};
/** 获取客服mock数据 */
function mockFetchBusinessTime(params) {
  const { genBusinessTime } = require("../../model/order/orderDetail");
  return genBusinessTime(params);
}

/** 获取客服数据 */
// export function fetchBusinessTime(params) {
//   if (config.useMock) {
//     return mockFetchBusinessTime(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }
const getBusinessTime = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockFetchBusinessTime(params));
};

module.exports = {
  getBusinessTime,
  getOrderDetail,
};
