/** 获取售后单mock数据 */
function mockFetchRightsPreview(params) {
  const { genRightsPreview } = require("../../model/order/applyService");

  return genRightsPreview(params);
}

// /** 获取售后单数据 */
// export function fetchRightsPreview(params) {
//   if (config.useMock) {
//     return mockFetchRightsPreview(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

const getRightsPreview = (req, res) => {
  const params = req.body.orderparams;

  res.send(mockFetchRightsPreview(params));
};

// /** 确认收货 */
// export function dispatchConfirmReceived() {
//   if (config.useMock) {
//     const { delay } = require('../_utils/delay');
//     return delay();
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

/** 获取可选的mock售后原因列表 */
function mockFetchApplyReasonList(params) {
  const { genApplyReasonList } = require("../../model/order/applyService");

  return genApplyReasonList(params);
}

// /** 获取可选的售后原因列表 */
// export function fetchApplyReasonList(params) {
//   if (config.useMock) {
//     return mockFetchApplyReasonList(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

const getApplyReasonList = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockFetchApplyReasonList(params));
};

/** 发起mock售后申请 */
function mockDispatchApplyService(params) {
  const { applyService } = require("../../model/order/applyService");

  return applyService(params);
}

// /** 发起售后申请 */
// export function dispatchApplyService(params) {
//   if (config.useMock) {
//     return mockDispatchApplyService(params);
//   }

//   return new Promise((resolve) => {
//     resolve('real api');
//   });
// }

const getApplyService = (req, res) => {
  const params = req.body.orderparams;
  res.send(mockDispatchApplyService(params));
};

module.exports = {
  getApplyReasonList,
  getApplyService,
  getRightsPreview,
};
