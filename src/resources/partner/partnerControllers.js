const Partner = require('./partnerModel');
const crudOperations = require('../../utils/crudOperations');

const _partner = crudOperations(Partner, 'partner');

const createPartner = async (req, res, next) => {
  _partner.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getPartner = async (req, res, next) => {
  _partner.getOne({ _id: req.params.id }, res, next);
};

const getAllPartner = async (req, res, next) => {
  _partner.getMany({}, res, next);
};

const updatePartner = async (req, res, next) => {
  _partner.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removePartner = async (req, res, next) => {
  _partner.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createPartner,
  getPartner,
  getAllPartner,
  updatePartner,
  removePartner,
};
