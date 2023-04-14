const path = require("path");

/** 获取商品列表 */
const getImg = (req, res) => {
  const url = req.params.imageName;
  console.log(url, "请求图片的url");
  const imagePath = path.join(__dirname, `../img/${url}`);
  res.sendFile(imagePath);
  console.log(imagePath);
};

module.exports = {
  getImg,
};
