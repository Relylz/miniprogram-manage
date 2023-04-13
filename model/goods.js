const { genGood } = require("./good");
//应该是首页的商品排列顺序函数

function getGoodsList(baseID = 0, length = 10) {
  return new Array(length).fill(0).map((_, idx) => genGood(idx + baseID));
}

const goodsList = getGoodsList();

module.exports = {
  getGoodsList,
  goodsList,
};
