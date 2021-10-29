const About = require('./aboutModel');
const { crudControllers } = require('../../utils/crud');

const sliderControllers = crudControllers(About);

module.exports = sliderControllers;
