/** 获取收货地址 */
function mockFetchDeliveryAddress(id) {
  const { genAddress } = require("../model/address");

  return genAddress(id);
}

// /** 获取收货地址 */
// function fetchDeliveryAddress(id = 0) {
//   if (config.useMock) {
//     return mockFetchDeliveryAddress(id);
//   }

//   return new Promise((resolve) => {
//     resolve("real api");
//   });
// }

/** 获取收货地址列表 */
function mockFetchDeliveryAddressList(len = 0) {
  const { genAddressList } = require("../model/address");

  return genAddressList(len).map((address) => {
    return {
      ...address,
      phoneNumber: address.phone,
      address: `${address.provinceName}${address.cityName}${address.districtName}${address.detailAddress}`,
      tag: address.addressTag,
    };
  });
}

/** 获取收货地址列表 */
// function fetchDeliveryAddressList(len = 10) {
//   if (config.useMock) {
//     return mockFetchDeliveryAddressList(len);
//   }

//   return new Promise((resolve) => {
//     resolve("real api");
//   });
// }
const getaddress = (req, res) => {
  const Id = req.body.addressId;
  res.send(mockFetchDeliveryAddress(Id));
};
const getaddresslist = (req, res) => {
  const len = req.body.addressLength;
  res.send(mockFetchDeliveryAddressList(len));
};

module.exports = {
  getaddress,
  getaddresslist,
};
