const GalleryPhoto = require('./galleryPhotoModel');
const crudOperations = require('../../utils/crudOperations');

const _galleryPhoto = crudOperations(GalleryPhoto, 'gallery photo');

const createGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.getOne({ _id: req.params.id }, res, next);
};

const getAllGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.getMany({}, res, next);
};

const updateGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createGalleryPhoto,
  getGalleryPhoto,
  getAllGalleryPhoto,
  updateGalleryPhoto,
  removeGalleryPhoto,
};
