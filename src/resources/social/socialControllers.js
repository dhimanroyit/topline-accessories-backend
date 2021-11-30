const SocialModel = require('./socialModel');
const crudOperations = require('../../utils/crudOperations');

const _social = crudOperations(SocialModel, 'social');

const createSocial = async (req, res, next) => {
  _social.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getAllSocial = async (req, res, next) => {
  _social.getMany({}, res, next);
};

const getSocial = async (req, res, next) => {
  _social.getOne({ _id: req.params.id }, res, next);
};

const updateSocial = async (req, res, next) => {
  _social.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeSocial = async (req, res, next) => {
  _social.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createSocial,
  getAllSocial,
  getSocial,
  updateSocial,
  removeSocial,
};
