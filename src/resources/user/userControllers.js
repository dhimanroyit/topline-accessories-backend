const User = require('./userModel');
const { crudControllers } = require('../../utils/crud');

const userControllers = crudControllers(User);
module.exports = userControllers;
