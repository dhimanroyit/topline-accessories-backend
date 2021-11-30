const SliderModel = require('./sliderModel');
const crudOperations = require('../../utils/crudOperations');

const _slider = crudOperations(SliderModel, 'slider');

const createSlider = async (req, res, next) => {
  const imgUrl = `${req.protocol}://${req.get('host')}/api/v1/public/upload/${
    req.file.filename
  }`;
  const sliderBody = {
    ...req.body,
    sliderImg: imgUrl,
    createdBy: req.user._id,
  };
  _slider.createOne({ ...sliderBody }, res, next);
};

const getSlider = async (req, res, next) => {
  _slider.getOne({ _id: req.params.id }, res, next);
};

const getAllSlider = async (req, res, next) => {
  _slider.getMany({}, res, next);
};

const updateSlider = async (req, res, next) => {
  _slider.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeSlider = async (req, res, next) => {
  _slider.removeOne({ _id: req.params.id }, res, next);
};
module.exports = {
  createSlider,
  getSlider,
  getAllSlider,
  updateSlider,
  removeSlider,
};
