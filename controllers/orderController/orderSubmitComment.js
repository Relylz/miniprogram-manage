/** 获取评价商品 */
function mockGetGoods(parameter) {
  const { getGoods } = require("../../model/submitComment");
  const data = getGoods(parameter);
  return data;
}

const getCommentGoods = (req, res) => {
  const parameter = req.body.orderparams;
  res.send(mockGetGoods(parameter));
};

module.exports = {
  getCommentGoods,
};
// /** 获取评价商品 */
// export function getGoods(parameter) {
//   // if (config.useMock) {
//   //   return mockGetGoods(parameter);
//   // }
//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }
