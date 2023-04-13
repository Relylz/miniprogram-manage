/** 获取个人中心信息 */
function mockFetchUserCenter() {
  const { genUsercenter } = require("../model/usercenter");
  return genUsercenter();
}

/** 获取个人中心信息 */
const getUserCenter = (req, res) => {
  res.send(mockFetchUserCenter());
};

/** 获取个人中心页面信息 */
function mockFetchPerson() {
  const { genSimpleUserInfo } = require("../model/usercenter");
  const { genAddress } = require("../model/address");
  const address = genAddress();
  return {
    ...genSimpleUserInfo(),
    address: {
      provinceName: address.provinceName,
      provinceCode: address.provinceCode,
      cityName: address.cityName,
      cityCode: address.cityCode,
    },
  };
}
const getUserDetail = (req, res) => {
  res.send(mockFetchPerson());
  console.log("个人中心详细信息");
};

module.exports = {
  getUserCenter,
  getUserDetail,
};
