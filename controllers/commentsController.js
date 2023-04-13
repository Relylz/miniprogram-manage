/** 获取商品详情页评论数 */
function mockFetchGoodDetailsCommentsCount(spuId = 0) {
  const { getGoodsDetailsCommentsCount } = require("../model/detailsComments");
  return getGoodsDetailsCommentsCount(spuId);
}

/** 获取商品详情页评论数 */
// function getGoodsDetailsCommentsCount(spuId = 0) {
//   if (config.useMock) {
//     return mockFetchGoodDetailsCommentsCount(spuId);
//   }
//   return new Promise((resolve) => {
//     resolve("real api");
//   });
// }

const getGoodsDetailsCommentsCount = (req, res) => {
  const spuId = req.body.Id;
  res.send(mockFetchGoodDetailsCommentsCount(spuId));
  console.log("收到评论数量请求");
};

/** 获取商品详情页评论 */
function mockFetchGoodDetailsCommentList(spuId = 0) {
  const { getGoodsDetailsComments } = require("../model/detailsComments");
  return getGoodsDetailsComments(spuId);
}

/** 获取商品详情页评论 */
// function getGoodsDetailsCommentList(spuId = 0) {

//   return new Promise((resolve) => {
//     resolve("real api");
//   });
// }
const getGoodsDetailsCommentList = (req, res) => {
  const spuId = req.body.Id;
  res.send(mockFetchGoodDetailsCommentList(spuId));
  console.log("收到评论请求");
};

/** 获取商品评论 */
function mockFetchComments(parmas) {
  const { getGoodsAllComments } = require("../model/comments");
  return getGoodsAllComments(parmas);
}

/** 获取商品评论数 */
function mockFetchCommentsCount(ID = 0) {
  const { getGoodsCommentsCount } = require("../model/comments");
  return getGoodsCommentsCount(ID);
}

const getCommentsDeatil = (req, res) => {
  const params = req.body.commentsparams;
  res.send(mockFetchComments(params));
  console.log("收到评论详情页请求");
};
const getCommentsDeatilCount = (req, res) => {
  const ID = req.body.commentsID;
  res.send(mockFetchCommentsCount(ID));
  console.log("收到评论详情页数量请求");
};

module.exports = {
  getGoodsDetailsCommentList,
  getGoodsDetailsCommentsCount,
  getCommentsDeatil,
  getCommentsDeatilCount,
};
