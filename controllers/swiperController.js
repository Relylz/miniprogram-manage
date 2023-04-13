const cdnBase = require("../config/index");
function mockFetchHome() {
  return {
    // swiper: genSwiperImageList(),
    swiper: swipers,
    tabList: [
      {
        text: "精选推荐",
        key: 0,
      },
      {
        text: "弘志",
        key: 1,
      },
      {
        text: "尚雅",
        key: 2,
      },
      {
        text: "明道",
        key: 3,
      },
      {
        text: "免费",
        key: 4,
      },
      {
        text: "竞赛",
        key: 5,
      },
      {
        text: "考公",
        key: 6,
      },
      {
        text: "考研",
        key: 7,
      },
    ],
    activityImg: `${cdnBase}/activity/banner.png`,
  };
}

const getSwiper = (req, res) => {
  res.send(mockFetchHome());
  console.log("收到get轮播图的请求");
};

const swipers = [
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png",
  "https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png",
];

module.exports = {
  getSwiper,
};
