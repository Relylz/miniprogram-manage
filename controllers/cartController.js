/** 获取购物车mock数据 */
function mockFetchCartGroupData(params) {
  const { genCartGroupData } = require("../model/cart");
  return genCartGroupData(params);
}

/** 获取购物车数据 */
const getCartGroupData = (req, res) => {
  const params = req.body.cartId;
  res.send(mockFetchCartGroupData(params));
  console.log("接收到了购物车请求");
  // return new Promise((resolve) => {

  //   resolve("real api");
  // });
};

module.exports = {
  getCartGroupData,
};
