const CallInfoModel = require('./callInfoModel');
const crudOperations = require('../../utils/crudOperations');

const _callInfo = crudOperations(CallInfoModel, 'call info');

const createCallInfo = async (req, res, next) => {
  _callInfo.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getAllCallInfo = async (req, res, next) => {
  _callInfo.getMany({}, res, next);
};

const getCallInfo = async (req, res, next) => {
  _callInfo.getOne({ _id: req.params.id }, res, next);
};

const updateCallInfo = async (req, res, next) => {
  _callInfo.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeCallInfo = async (req, res, next) => {
  _callInfo.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createCallInfo,
  getAllCallInfo,
  getCallInfo,
  updateCallInfo,
  removeCallInfo,
};
