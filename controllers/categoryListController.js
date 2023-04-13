/** 获取商品列表 */
function mockFetchGoodCategory() {
  const { getCategoryList } = require("../model/category");
  return getCategoryList();
}

/** 获取商品列表 */
const getCategoryList = (req, res) => {
  // if (config.useMock) {
  //   return mockFetchGoodCategory();
  // }
  //   return mockFetchGoodCategory();
  res.send(mockFetchGoodCategory());
  console.log("收到get商品列表的请求");
};

module.exports = {
  getCategoryList,
};
