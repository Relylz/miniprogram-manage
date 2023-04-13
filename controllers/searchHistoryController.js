/** 获取搜索历史 */
function mockSearchHistory() {
  const { getSearchHistory } = require("../model/search");
  return getSearchHistory();
}

/** 获取搜索历史 */
// export function getSearchHistory() {
// //   if (config.useMock) {
// //     return mockSearchHistory();
// //   }
//   return new Promise((resolve) => {
//     //待修改
//     resolve("real api");
//   });
// }

// 发送搜索历史
const getSearchHistory = (req, res) => {
  res.send(mockSearchHistory());
  console.log("收到get搜索历史的请求");
};

/** 获取热门搜索 */
function mockSearchPopular() {
  const { getSearchPopular } = require("../model/search");
  return getSearchPopular();
}

/** 获取热门搜索 */
// export function getSearchPopular() {
// //   if (config.useMock) {
// //     return mockSearchPopular();
// //   }
//   return new Promise((resolve) => {
//     resolve("real api");
//   });
// }

const getSearchPopular = (req, res) => {
  res.send(mockSearchPopular());
  console.log("收到get热门搜索的请求");
};

module.exports = {
  getSearchHistory,
  getSearchPopular,
};
