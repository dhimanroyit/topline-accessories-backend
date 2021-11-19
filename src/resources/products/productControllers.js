const Product = require('./productModel');
const crudOperations = require('../../utils/crudOperations');

const _product = crudOperations(Product, 'product');

const createProduct = async (req, res, next) => {
  _product.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getProduct = async (req, res, next) => {
  _product.getOne({ _id: req.params.id }, res, next);
};

const getAllProduct = async (req, res, next) => {
  _product.getMany({}, res, next);
};

const updateProduct = async (req, res, next) => {
  _product.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeProduct = async (req, res, next) => {
  _product.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  removeProduct,
};
