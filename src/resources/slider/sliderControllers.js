const Slider = require('./sliderModel');
const { crudControllers } = require('../../utils/crud');

const sliderControllers = crudControllers(Slider);

module.exports = sliderControllers;
