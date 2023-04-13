const getGood = (req, res) => {
  res.send(mockFetchGoodsList());
  console.log("收到get商品的请求");
};
const getGoodDetail = (req, res) => {
  const ID = req.body.goodID;
  res.send(mockFetchGood(ID));
  // console.log(req.body, "详细商品编号");
};

function mockFetchGoodsList(pageIndex = 0, pageSize = 20) {
  //原模板中的模拟请求函数
  // const { delay } = require("../_utils/delay");
  const { getGoodsList } = require("../model/goods");
  return getGoodsList(pageIndex, pageSize).map((item) => {
    return {
      spuId: item.spuId,
      thumb: item.primaryImage,
      title: item.title,
      price: item.minSalePrice,
      originPrice: item.maxLinePrice,
      tags: item.spuTagList.map((tag) => tag.title),
    };
  });
}
/** 获取详细商品列表 */
function mockFetchGood(ID = 0) {
  const { genGood } = require("../model/good");
  return genGood(ID);
}
module.exports = {
  getGood,
  getGoodDetail,
};

// const allGoods = [
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "0",
//     title: "马克思主义毛泽东思想毛概",
//     primaryImage: "http://localhost:3000/image/girl",
//     images: [
//       "http://localhost:3000/image/456",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09b.png",
//     ],
//     video: null,
//     available: 1,
//     minSalePrice: 29800,
//     minLinePrice: 29800,
//     maxSalePrice: 29800,
//     maxLinePrice: 30000,
//     spuStockQuantity: 510,
//     soldNum: 1020,
//     isPutOnSale: 1,
//     categoryIds: [
//       "127880527393854975",
//       "127880527393854976",
//       "127880537778953984",
//     ],
//     specList: [
//       {
//         specId: "10011",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "10012",
//             specId: null,
//             saasId: null,
//             specValue: "米色荷叶边",
//             image: null,
//           },
//         ],
//       },
//       {
//         specId: "10013",
//         title: "尺码",
//         specValueList: [
//           {
//             specValueId: "11014",
//             specId: null,
//             saasId: null,
//             specValue: "S",
//             image: null,
//           },
//           {
//             specValueId: "10014",
//             specId: null,
//             saasId: null,
//             specValue: "M",
//             image: null,
//           },
//           {
//             specValueId: "11013",
//             specId: null,
//             saasId: null,
//             specValue: "L",
//             image: null,
//           },
//         ],
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135676631",
//         skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
//         specInfo: [
//           {
//             specId: "10011",
//             specTitle: null,
//             specValueId: "10012",
//             specValue: null,
//           },
//           {
//             specId: "10013",
//             specTitle: null,
//             specValueId: "11014",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29800",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "40000",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 175,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135676632",
//         skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
//         specInfo: [
//           {
//             specId: "10011",
//             specTitle: null,
//             specValueId: "10012",
//             specValue: null,
//           },
//           {
//             specId: "10013",
//             specTitle: null,
//             specValueId: "11013",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29800",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "40000",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 158,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135681631",
//         skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
//         specInfo: [
//           {
//             specId: "10011",
//             specTitle: null,
//             specValueId: "10012",
//             specValue: null,
//           },
//           {
//             specId: "10013",
//             specTitle: null,
//             specValueId: "10014",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29800",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "40000",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 177,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     spuTagList: [
//       {
//         id: "13001",
//         title: "限时抢购",
//         image: null,
//       },
//     ],
//     limitInfo: [
//       {
//         text: "限购5件",
//       },
//     ],
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09d.png",
//     ],
//     etitle: "",
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135686633",
//     title: "高等数学",
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png",
//     minSalePrice: "25900",
//     minLinePrice: "31900",
//     maxSalePrice: "26900",
//     maxLinePrice: "31900",
//     isSoldOut: false,
//     images: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a1.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png",
//     ],
//     groupIdList: ["15029", "14023"],
//     spuTagList: [
//       {
//         id: null,
//         title: "2020夏季新款",
//         image: null,
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135686634",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "10001",
//             specValue: "白色",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "10003",
//             specValue: "M",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "25900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "31900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: -9,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135691631",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "10001",
//             specValue: "白色",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "11003",
//             specValue: "S",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "26900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "31900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 177,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135691632",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "10001",
//             specValue: "白色",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "11002",
//             specValue: "L",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "26900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "31900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 194,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     isAvailable: 1,
//     spuStockQuantity: 371,
//     soldNum: 1032,
//     isPutOnSale: 1,
//     specList: [
//       {
//         specId: "10000",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "10001",
//             specId: "10000",
//             saasId: "88888888",
//             specValue: "白色",
//             image: "",
//           },
//         ],
//       },
//       {
//         specId: "10002",
//         title: "尺码",
//         specValueList: [
//           {
//             specValueId: "11003",
//             specId: "10002",
//             saasId: "88888888",
//             specValue: "S",
//             image: "",
//           },
//           {
//             specValueId: "10003",
//             specId: "10002",
//             saasId: "88888888",
//             specValue: "M",
//             image: "",
//           },
//           {
//             specValueId: "11002",
//             specId: "10002",
//             saasId: "88888888",
//             specValue: "L",
//             image: "",
//           },
//         ],
//       },
//     ],
//     promotionList: null,
//     minProfitPrice: null,
//     etitle: "",
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08d.png",
//     ],
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135691628",
//     title: "大学英语",
//     images: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a1.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b1.png",
//     ],
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png",
//     minSalePrice: "25900",
//     minLinePrice: "39900",
//     maxSalePrice: "25900",
//     maxLinePrice: "39900",
//     isSoldOut: true,
//     groupIdList: ["15029", "14023"],
//     spuTagList: [
//       {
//         id: null,
//         title: "2020夏季新款",
//         image: null,
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135686631",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904180768617216",
//             specValue: "军绿色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862494014208",
//             specValue: "XS",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "25900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 0,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135686632",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904180768617216",
//             specValue: "军绿色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862007474176",
//             specValue: "M",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "25900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 0,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135691629",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904180768617216",
//             specValue: "军绿色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862175246592",
//             specValue: "S",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "25900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 0,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135691630",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904180768617216",
//             specValue: "军绿色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904861755815680",
//             specValue: "L",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "25900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 0,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     isAvailable: 1,
//     spuStockQuantity: 0,
//     soldNum: 1022,
//     isPutOnSale: 1,
//     specList: [
//       {
//         specId: "127904180600844800",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "127904180768617216",
//             specId: "127904180600844800",
//             saasId: "88888888",
//             specValue: "军绿色",
//             image: "",
//           },
//         ],
//       },
//       {
//         specId: "127904861604820480",
//         title: "尺码",
//         specValueList: [
//           {
//             specValueId: "127904862494014208",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "XS",
//             image: "",
//           },
//           {
//             specValueId: "127904862175246592",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "S",
//             image: "",
//           },
//           {
//             specValueId: "127904862007474176",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "M",
//             image: "",
//           },
//           {
//             specValueId: "127904861755815680",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "L",
//             image: "",
//           },
//         ],
//       },
//     ],
//     promotionList: null,
//     minProfitPrice: null,
//     etitle: "",
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17d.png",
//     ],
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135686623",
//     title: "出闲置教资辅导书和真题试卷",
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png",
//     images: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3b.png",
//     ],
//     minSalePrice: "9900",
//     minLinePrice: "16900",
//     maxSalePrice: "10900",
//     maxLinePrice: "16900",
//     isSoldOut: false,
//     groupIdList: [
//       "15029",
//       "15030",
//       "14023",
//       "127886731843219200",
//       "127886732665303040",
//       "127886733101511680",
//       "127886733923595520",
//       "14025",
//       "127886726071855616",
//       "14026",
//       "127886727481142784",
//       "127886731440566784",
//     ],
//     spuTagList: [
//       {
//         id: null,
//         title: "联名系列",
//         image: null,
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135686624",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "10001",
//             specValue: "经典白",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "10003",
//             specValue: "节能套装",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "9900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "16900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 98,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135686625",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "11000",
//             specValue: "贵族青",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "11003",
//             specValue: "经典套装",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "9900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "16900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 100,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135686626",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "11000",
//             specValue: "经典白",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "11002",
//             specValue: "尊享礼盒装",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "9900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "16900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 100,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135691622",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "10001",
//             specValue: "经典白",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "11003",
//             specValue: "S",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "9900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "16900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 100,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135691623",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "10001",
//             specValue: "经典白",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "11002",
//             specValue: "尊享礼盒装",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "10900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "16900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 100,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135691624",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10000",
//             specTitle: null,
//             specValueId: "11000",
//             specValue: "贵族青",
//           },
//           {
//             specId: "10002",
//             specTitle: null,
//             specValueId: "10003",
//             specValue: "节能套装",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "9900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "16900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 100,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     isAvailable: 1,
//     spuStockQuantity: 598,
//     soldNum: 102,
//     isPutOnSale: 1,
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3d.png",
//     ],
//     specList: [
//       {
//         specId: "10000",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "10001",
//             specId: "10000",
//             saasId: "88888888",
//             specValue: "经典白",
//             image: "",
//           },
//           {
//             specValueId: "11000",
//             specId: "10000",
//             saasId: "88888888",
//             specValue: "贵族青",
//             image: "",
//           },
//         ],
//       },
//       {
//         specId: "10002",
//         title: "尺码",
//         specValueList: [
//           {
//             specValueId: "11003",
//             specId: "10002",
//             saasId: "88888888",
//             specValue: "经典套装",
//             image: "",
//           },
//           {
//             specValueId: "10003",
//             specId: "10002",
//             saasId: "88888888",
//             specValue: "节能套装",
//             image: "",
//           },
//           {
//             specValueId: "11002",
//             specId: "10002",
//             saasId: "88888888",
//             specValue: "尊享礼盒装",
//             image: "",
//           },
//         ],
//       },
//     ],
//     promotionList: null,
//     minProfitPrice: null,
//     etitle: "",
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135681628",
//     title: "出闲置的计算机二级资料",
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
//     images: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a1.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3b.png",
//     ],
//     minSalePrice: "29900",
//     minLinePrice: "39900",
//     maxSalePrice: "39900",
//     maxLinePrice: "39900",
//     isSoldOut: false,
//     groupIdList: [
//       "14023",
//       "127886732245873408",
//       "127886733487386880",
//       "14025",
//       "127886726071855616",
//       "14026",
//       "127886728420666112",
//       "127886728957538048",
//       "127886729779621888",
//       "127886730165497088",
//       "127886730652037376",
//       "127886731037912576",
//       "127886731440566784",
//       "127886729360190464",
//       "15029",
//       "15030",
//     ],
//     spuTagList: [
//       {
//         id: null,
//         title: "限时抢购",
//         image: null,
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135676629",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181322265856",
//             specValue: "浅灰色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862175246592",
//             specValue: "S",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 80,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135676630",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181322265856",
//             specValue: "浅灰色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904861755815680",
//             specValue: "L",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "39900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 122,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135681629",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181322265856",
//             specValue: "浅灰色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862007474176",
//             specValue: "M",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "39900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 119,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3d.png",
//     ],
//     isAvailable: 1,
//     spuStockQuantity: 321,
//     soldNum: 102,
//     isPutOnSale: 1,
//     specList: [
//       {
//         specId: "127904180600844800",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "127904181322265856",
//             specId: "127904180600844800",
//             saasId: "88888888",
//             specValue: "浅灰色",
//             image: "",
//           },
//         ],
//       },
//       {
//         specId: "127904861604820480",
//         title: "尺码",
//         specValueList: [
//           {
//             specValueId: "127904862175246592",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "S",
//             image: "",
//           },
//           {
//             specValueId: "127904862007474176",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "M",
//             image: "",
//           },
//           {
//             specValueId: "127904861755815680",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "L",
//             image: "",
//           },
//         ],
//       },
//     ],
//     promotionList: null,
//     minProfitPrice: null,
//     etitle: "",
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135681626",
//     title: "出英语四级资料",
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
//     images: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a1.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2b.png",
//     ],
//     minSalePrice: "29000",
//     minLinePrice: "40000",
//     maxSalePrice: "39000",
//     maxLinePrice: "40000",
//     isSoldOut: false,
//     groupIdList: [
//       "15029",
//       "15030",
//       "14023",
//       "127886732245873408",
//       "127886733487386880",
//       "14025",
//       "127886726071855616",
//       "14026",
//       "127886728420666112",
//       "127886728957538048",
//       "127886730652037376",
//       "127886731037912576",
//     ],
//     spuTagList: [
//       {
//         id: null,
//         title: "限时抢购",
//         image: null,
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135676627",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10006",
//             specTitle: null,
//             specValueId: "10007",
//             specValue: "黑色",
//           },
//           {
//             specId: "11007",
//             specTitle: null,
//             specValueId: "10009",
//             specValue: "简约款",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29000",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "40000",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 123,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135676628",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10006",
//             specTitle: null,
//             specValueId: "10007",
//             specValue: "黑色",
//           },
//           {
//             specId: "11007",
//             specTitle: null,
//             specValueId: "10008",
//             specValue: "礼盒装",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "39000",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "40000",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 123,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135681627",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "10006",
//             specTitle: null,
//             specValueId: "10007",
//             specValue: "黑色",
//           },
//           {
//             specId: "11007",
//             specTitle: null,
//             specValueId: "11008",
//             specValue: "带充电线简约款",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "39000",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "40000",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 120,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2d.png",
//     ],
//     isAvailable: 1,
//     spuStockQuantity: 366,
//     soldNum: 102,
//     isPutOnSale: 1,
//     specList: [
//       {
//         specId: "10006",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "10007",
//             specId: "10006",
//             saasId: "88888888",
//             specValue: "黑色",
//             image: "",
//           },
//         ],
//       },
//       {
//         specId: "11007",
//         title: "类型",
//         specValueList: [
//           {
//             specValueId: "10009",
//             specId: "11007",
//             saasId: "88888888",
//             specValue: "简约款",
//             image: "",
//           },
//           {
//             specValueId: "11008",
//             specId: "11007",
//             saasId: "88888888",
//             specValue: "带充电线简约款",
//             image: "",
//           },
//           {
//             specValueId: "10008",
//             specId: "11007",
//             saasId: "88888888",
//             specValue: "礼盒款",
//             image: "",
//           },
//         ],
//       },
//     ],
//     promotionList: null,
//     minProfitPrice: null,
//     etitle: "",
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135681622",
//     title: "考公资料低价出",
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a.png",
//     images: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1a2.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1b.png",
//     ],
//     minSalePrice: "129900",
//     minLinePrice: "218000",
//     maxSalePrice: "139900",
//     maxLinePrice: "218000",
//     isSoldOut: false,
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-1d.png",
//     ],
//     groupIdList: [
//       "14023",
//       "127886732665303040",
//       "127886733101511680",
//       "127886733923595520",
//       "14025",
//       "127886726071855616",
//       "14026",
//       "127886728957538048",
//       "127886727481142784",
//       "127886729779621888",
//       "127886730165497088",
//       "127886730652037376",
//       "127886731440566784",
//       "127886729360190464",
//       "15029",
//       "15030",
//     ],
//     spuTagList: [
//       {
//         id: null,
//         title: "掌柜热卖",
//         image: null,
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135676623",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181506815488",
//             specValue: "奶黄色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862175246592",
//             specValue: "单盘",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "129900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "218000",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 119,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135676624",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181506815488",
//             specValue: "奶黄色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904861755815680",
//             specValue: "盘+碗",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "139900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "218000",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 116,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135681623",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181506815488",
//             specValue: "奶黄色",
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862007474176",
//             specValue: "单盘",
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "139900",
//             priceTypeName: "销售价格",
//           },
//           {
//             priceType: 2,
//             price: "218000",
//             priceTypeName: "划线价格",
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 122,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: null,
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     isAvailable: 1,
//     spuStockQuantity: 357,
//     soldNum: 23102,
//     isPutOnSale: 1,
//     specList: [
//       {
//         specId: "127904180600844800",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "127904181506815488",
//             specId: "127904180600844800",
//             saasId: "88888888",
//             specValue: "奶黄色",
//             image: "",
//           },
//         ],
//       },
//       {
//         specId: "127904861604820480",
//         title: "类型",
//         specValueList: [
//           {
//             specValueId: "127904862175246592",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "单盘",
//             image: "",
//           },
//           {
//             specValueId: "127904862007474176",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "单碗",
//             image: "",
//           },
//           {
//             specValueId: "127904861755815680",
//             specId: "127904861604820480",
//             saasId: "88888888",
//             specValue: "盘+碗",
//             image: "",
//           },
//         ],
//       },
//     ],
//     promotionList: null,
//     minProfitPrice: null,
//     etitle: "",
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135681624",
//     title: "事业编真题卷和辅导资料",
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png",
//     images: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2a.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2a1.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png",
//     ],
//     video: null,
//     available: 1,
//     minSalePrice: "19900",
//     minLinePrice: "19900",
//     maxSalePrice: "29900",
//     maxLinePrice: "29900",
//     spuStockQuantity: 0,
//     soldNum: 102,
//     isPutOnSale: 1,
//     categoryIds: [
//       "127880527393854975",
//       "127880527393854977",
//       "127880526789875961",
//     ],
//     specList: [
//       {
//         specId: "127904180600844800",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "127904180768617216",
//             specId: null,
//             saasId: null,
//             specValue: "奶黄色",
//             image: null,
//           },
//         ],
//       },
//       {
//         specId: "127904861604820480",
//         title: "数量",
//         specValueList: [
//           {
//             specValueId: "127904862175246592",
//             specId: null,
//             saasId: null,
//             specValue: "三件套",
//             image: null,
//           },
//           {
//             specValueId: "127904862007474176",
//             specId: null,
//             saasId: null,
//             specValue: "六件套",
//             image: null,
//           },
//           {
//             specValueId: "127904861755815680",
//             specId: null,
//             saasId: null,
//             specValue: "八件套",
//             image: null,
//           },
//         ],
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135676625",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904180768617216",
//             specValue: null,
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862175246592",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "19900",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "29900",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 0,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135676626",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904180768617216",
//             specValue: null,
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904861755815680",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29900",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "29900",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 0,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135681625",
//         skuImage: null,
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904180768617216",
//             specValue: null,
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862007474176",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29900",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "29900",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 0,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     spuTagList: [
//       {
//         id: "19011",
//         title: "2020秋季新款",
//         image: null,
//       },
//     ],
//     spuLimitList: null,
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2d.png",
//     ],
//     etitle: "",
//   },
//   {
//     saasId: "88888888",
//     storeId: "1000",
//     spuId: "135681628",
//     title: "华图广东省考资料",
//     primaryImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
//     images: ["https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png"],
//     video: null,
//     available: 1,
//     minSalePrice: "29900",
//     minLinePrice: "29900",
//     maxSalePrice: "39900",
//     maxLinePrice: "39900",
//     spuStockQuantity: 321,
//     soldNum: 103,
//     isPutOnSale: 1,
//     categoryIds: [
//       "127880527393854975",
//       "127880527393854977",
//       "127880526789875961",
//     ],
//     specList: [
//       {
//         specId: "127904180600844800",
//         title: "颜色",
//         specValueList: [
//           {
//             specValueId: "127904181322265856",
//             specId: null,
//             saasId: null,
//             specValue: "浅灰色",
//             image: null,
//           },
//         ],
//       },
//       {
//         specId: "127904861604820480",
//         title: "尺码",
//         specValueList: [
//           {
//             specValueId: "127904862175246592",
//             specId: null,
//             saasId: null,
//             specValue: "S",
//             image: null,
//           },
//           {
//             specValueId: "127904862007474176",
//             specId: null,
//             saasId: null,
//             specValue: "M",
//             image: null,
//           },
//           {
//             specValueId: "127904861755815680",
//             specId: null,
//             saasId: null,
//             specValue: "L",
//             image: null,
//           },
//         ],
//       },
//     ],
//     skuList: [
//       {
//         skuId: "135676629",
//         skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181322265856",
//             specValue: null,
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862175246592",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "29900",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 80,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135676630",
//         skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181322265856",
//             specValue: null,
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904861755815680",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "39900",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 122,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//       {
//         skuId: "135681629",
//         skuImage: "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png",
//         specInfo: [
//           {
//             specId: "127904180600844800",
//             specTitle: null,
//             specValueId: "127904181322265856",
//             specValue: null,
//           },
//           {
//             specId: "127904861604820480",
//             specTitle: null,
//             specValueId: "127904862007474176",
//             specValue: null,
//           },
//         ],
//         priceInfo: [
//           {
//             priceType: 1,
//             price: "39900",
//             priceTypeName: null,
//           },
//           {
//             priceType: 2,
//             price: "39900",
//             priceTypeName: null,
//           },
//         ],
//         stockInfo: {
//           stockQuantity: 119,
//           safeStockQuantity: 0,
//           soldQuantity: 0,
//         },
//         weight: {
//           value: null,
//           unit: "KG",
//         },
//         volume: null,
//         profitPrice: null,
//       },
//     ],
//     spuTagList: [
//       {
//         id: "13001",
//         title: "限时抢购",
//         image: null,
//       },
//     ],
//     spuLimitList: null,
//     desc: [
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3c.png",
//       "https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3d.png",
//     ],
//     etitle: "",
//   },
// ];
