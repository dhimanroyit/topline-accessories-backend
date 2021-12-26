const SliderModel = require('./sliderModel');
const crudOperations = require('../../utils/crudOperations');
const BadRequest = require('../../utils/error/BadRequest');
const { removeUploadFile } = require('../../middleware/upload');

const _slider = crudOperations(SliderModel, 'slider');

const createSlider = async (req, res, next) => {
  if (!req.file) {
    next(new BadRequest('slider image must be upload'));
  } else if (req.file) {
    const sliderImg = `/public/upload/${req.file.originalname}`;

    const sliderBody = {
      ...req.body,
      sliderImg,
      createdBy: req.user._id,
    };
    _slider.createOne({ ...sliderBody }, res, next);
  }
};

const getSlider = async (req, res, next) => {
  _slider.getOne({ _id: req.params.id }, res, next);
};

const getAllSlider = async (req, res, next) => {
  _slider.getMany({}, res, next);
};

const updateSlider = async (req, res, next) => {
  _slider.updateOne(
    async (model) => {
      let sliderImg = null;
      if (req.file?.originalname) {
        const slider = await model.findById(req.params.id).lean().exec();
        if (slider.sliderImg) {
          removeUploadFile(slider.sliderImg);
        }
        sliderImg = `/public/upload/${req.file.originalname}`;
      }
      return await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body, ...(sliderImg && { sliderImg }) },
          { new: true }
        )
        .lean()
        .exec();
    },
    res,
    next
  );
};

const removeSlider = async (req, res, next) => {
  _slider.removeOne(
    async (model) => {
      const removeSlider = await model
        .findOneAndRemove({ _id: req.params.id })
        .lean()
        .exec();
      if (removeSlider.sliderImg) {
        removeUploadFile(removeSlider.sliderImg);
      }
      return removeSlider;
    },
    res,
    next
  );
};
module.exports = {
  createSlider,
  getSlider,
  getAllSlider,
  updateSlider,
  removeSlider,
};
