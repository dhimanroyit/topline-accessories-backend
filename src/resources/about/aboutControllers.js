const About = require('./aboutModel');
const crudOperations = require('../../utils/crudOperations');

const _about = crudOperations(About, 'about');

const createAbout = async (req, res, next) => {
  _about.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getAbout = async (req, res, next) => {
  _about.getOne({ _id: req.params.id }, res, next);
};

const getAllAbout = async (req, res, next) => {
  _about.getMany({}, res, next);
};

const updateAbout = async (req, res, next) => {
  _about.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeAbout = async (req, res, next) => {
  _about.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createAbout,
  getAbout,
  getAllAbout,
  updateAbout,
  removeAbout,
};
