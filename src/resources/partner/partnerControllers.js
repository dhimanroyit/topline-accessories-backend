const Partner = require('./partnerModel');
const crudOperations = require('../../utils/crudOperations');
const { removeUploadFile } = require('../../middleware/upload');

const _partner = crudOperations(Partner, 'partner');

const createPartner = async (req, res, next) => {
  if (!req.file) {
    next(new BadRequest('product image must be upload'));
  } else if (req.file) {
    const partnerImg = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/public/upload/${req.file.originalname}`;

    const sliderBody = {
      ...req.body,
      partnerImg,
      createdBy: req.user._id,
    };
    _partner.createOne({ ...sliderBody }, res, next);
  }
};

const getPartner = async (req, res, next) => {
  _partner.getOne({ _id: req.params.id }, res, next);
};

const getAllPartner = async (req, res, next) => {
  _partner.getMany({}, res, next);
};

const updatePartner = async (req, res, next) => {
  _partner.updateOne(
    async (model) => {
      let partnerImg = null;
      if (req.file?.originalname) {
        const partner = await model.findById(req.params.id).lean().exec();
        if (partner.partnerImg) {
          removeUploadFile(partner.partnerImg);
        }
        partnerImg = `${req.protocol}://${req.get(
          'host'
        )}/api/v1/public/upload/${req.file.originalname}`;
      }
      return await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body, ...(partnerImg && { partnerImg }) },
          { new: true }
        )
        .lean()
        .exec();
    },
    res,
    next
  );
};

const removePartner = async (req, res, next) => {
  _partner.removeOne(
    async (model) => {
      const removePartner = await model
        .findOneAndRemove({ _id: req.params.id })
        .lean()
        .exec();
      if (removePartner.partnerImg) {
        removeUploadFile(removePartner.partnerImg);
      }
      return removePartner;
    },
    res,
    next
  );
};

module.exports = {
  createPartner,
  getPartner,
  getAllPartner,
  updatePartner,
  removePartner,
};
