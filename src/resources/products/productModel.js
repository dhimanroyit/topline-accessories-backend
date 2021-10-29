const { Schema, model } = require('mongoose');

const productControllers = new Schema(
  {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    thumb: {
      type: 'string',
      required: true,
    },
    images: {
      type: 'array',
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model('Product', productControllers);

module.exports = Product;
