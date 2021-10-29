const Team = require('./teamModel');
const { crudControllers } = require('../../utils/crud');

const teamControllers = crudControllers(Team);

module.exports = teamControllers;
