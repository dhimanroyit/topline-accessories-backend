const Team = require('./teamModel');
const crudOperations = require('../../utils/crudOperations');

const _team = crudOperations(Team, 'team');

const createTeam = async (req, res, next) => {
  _team.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getTeam = async (req, res, next) => {
  _team.getOne({ _id: req.params.id }, res, next);
};

const getAllTeam = async (req, res, next) => {
  _team.getMany({}, res, next);
};

const updateTeam = async (req, res, next) => {
  _team.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeTeam = async (req, res, next) => {
  _team.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createTeam,
  getTeam,
  getAllTeam,
  updateTeam,
  removeTeam,
};
