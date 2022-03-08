const Product = require('./productModel');
const crudOperations = require('../../utils/crudOperations');
const { removeUploadFile } = require('../../middleware/upload');
const BadRequest = require('../../utils/error/BadRequest');

const _product = crudOperations(Product, 'product');

const createProduct = async (req, res, next) => {
  if (!req.files) {
    next(new BadRequest('product image must be upload'));
  } else if (req.files) {
    const productFiles = [...req.files];
    const productImg = productFiles.map((file) => {
      return `/upload/${file.originalname}`;
    });
    const productBody = {
      ...req.body,
      productImg,
      createdBy: req.user._id,
    };
    _product.createOne({ ...productBody }, res, next);
  }
};

const getProduct = async (req, res, next) => {
  _product.getOne({ _id: req.params.id }, res, next);
};

const getAllProduct = async (req, res, next) => {
  _product.getMany({}, res, next);
};

const updateProduct = async (req, res, next) => {
  _product.updateOne(
    async (model) => {
      let productImg = null;
      if (req.files) {
        const product = await model.findById(req.params.id).lean().exec();
        if (product.productImg && Array.isArray(product.productImg)) {
          product.productImg.forEach((img) => {
            removeUploadFile(img);
          });
        }
        const productFiles = [...req.files];
        productImg = productFiles.map((file) => {
          return `/upload/${file.originalname}`;
        });
      }
      return await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body, ...(productImg && { productImg }) },
          { new: true }
        )
        .lean()
        .exec();
    },
    res,
    next
  );
};

const removeProduct = async (req, res, next) => {
  _product.removeOne(
    async (model) => {
      const removeProduct = await model
        .findOneAndRemove({ _id: req.params.id })
        .lean()
        .exec();
      if (removeProduct.productImg && Array.isArray(removeProduct.productImg)) {
        removeProduct.productImg.forEach((img) => {
          removeUploadFile(img);
        });
      }
      return removeProduct;
    },
    res,
    next
  );
};

module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  removeProduct,
};
