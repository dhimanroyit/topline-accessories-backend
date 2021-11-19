const Slider = require('./sliderModel');
const crudOperations = require('../../utils/crudOperations');

const _slider = crudOperations(Slider, 'slider');

const createSlider = async (req, res, next) => {
  _slider.createOne({ ...req.body, createdBy: req.user._id }, res, next);
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
