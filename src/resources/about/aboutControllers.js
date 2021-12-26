const About = require('./aboutModel');
const crudOperations = require('../../utils/crudOperations');
const { removeUploadFile } = require('../../middleware/upload');
const BadRequest = require('../../utils/error/BadRequest');
const _about = crudOperations(About, 'about');

const createAbout = async (req, res, next) => {
  if (!req.file) {
    next(new BadRequest('about image must be upload'));
  } else if (req.file) {
    const aboutImg = `/public/upload/${req.file.originalname}`;
    const aboutBody = {
      ...req.body,
      aboutImg,
      createdBy: req.user._id,
    };
    _about.createOne({ ...aboutBody }, res, next);
  }
};

const getAbout = async (req, res, next) => {
  _about.getOne({ _id: req.params.id }, res, next);
};

const getAllAbout = async (req, res, next) => {
  _about.getMany({}, res, next);
};

const updateAbout = async (req, res, next) => {
  _about.updateOne(
    async (model) => {
      let aboutImg = null;
      if (req.file?.originalname) {
        const about = await model.findById(req.params.id).lean().exec();
        if (about.aboutImg) {
          removeUploadFile(about.aboutImg);
        }
        aboutImg = `/public/upload/${req.file.originalname}`;
      }
      return await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body, ...(aboutImg && { aboutImg }) },
          { new: true }
        )
        .lean()
        .exec();
    },
    res,
    next
  );
};

const removeAbout = async (req, res, next) => {
  _about.removeOne(
    async (model) => {
      const removeAbout = await model
        .findOneAndRemove({ _id: req.params.id })
        .lean()
        .exec();
      if (removeAbout.aboutImg) {
        removeUploadFile(removeAbout.aboutImg);
      }
      return removeAbout;
    },
    res,
    next
  );
};

module.exports = {
  createAbout,
  getAbout,
  getAllAbout,
  updateAbout,
  removeAbout,
};
