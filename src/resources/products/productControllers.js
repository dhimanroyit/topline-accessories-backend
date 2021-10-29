const Product = require('./productModel');
const { crudControllers } = require('../../utils/crud');

const productControllers = crudControllers(Product);

module.exports = productControllers;
