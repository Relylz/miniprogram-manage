/** 获取订单列表mock数据 */
function mockFetchOrders(params) {
  const { genOrders } = require("../../model/order/orderList");

  return genOrders(params);
}

const getOrders = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockFetchOrders(params));
};
// /** 获取订单列表数据 */
// export function fetchOrders(params) {
//   if (config.useMock) {
//     return mockFetchOrders(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

/** 获取订单列表mock数据 */
function mockFetchOrdersCount(params) {
  const { genOrdersCount } = require("../../model/order/orderList");

  return genOrdersCount(params);
}

const getOrdersCount = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockFetchOrdersCount(params));
};

/** 获取订单列表统计 */
// export function fetchOrdersCount(params) {
//   if (config.useMock) {
//     console.log(mockFetchOrdersCount(params), '定位符号&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
//     return mockFetchOrdersCount(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

module.exports = {
  getOrders,
  getOrdersCount,
};
