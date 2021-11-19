const Address = require('./addressModel');
const crudOperations = require('../../utils/crudOperations');

const _address = crudOperations(Address, 'address');

const createAddress = async (req, res, next) => {
  _address.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getAddress = async (req, res, next) => {
  _address.getOne({ _id: req.params.id }, res, next);
};

const getAllAddress = async (req, res, next) => {
  _address.getMany({}, res, next);
};

const updateAddress = async (req, res, next) => {
  _address.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeAddress = async (req, res, next) => {
  _address.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createAddress,
  getAddress,
  getAllAddress,
  updateAddress,
  removeAddress,
};
