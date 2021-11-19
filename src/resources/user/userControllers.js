const User = require('./userModel');
const crudOperations = require('../../utils/crudOperations');

const _user = crudOperations(User, 'user');

const createUser = async (req, res, next) => {
  _user.createOne({ ...req.body }, res, next);
};

const getUser = async (req, res, next) => {
  _user.getOne({ _id: req.params.id }, res, next);
};

const getAllUser = async (req, res, next) => {
  _user.getMany({}, res, next);
};

const updateUser = async (req, res, next) => {
  _user.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeUser = async (req, res, next) => {
  _user.removeOne({ _id: req.params.id }, res, next);
};

module.exports = { createUser, getUser, getAllUser, updateUser, removeUser };
