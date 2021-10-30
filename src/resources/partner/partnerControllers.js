const Partner = require('./partnerModel');
const { crudControllers } = require('../../utils/crud');

const partnerControllers = crudControllers(Partner);

module.exports = partnerControllers;
