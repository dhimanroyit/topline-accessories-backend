const GalleryVideo = require('./galleryVideoModel');
const crudOperations = require('../../utils/crudOperations');

const _galleryVideo = crudOperations(GalleryVideo, 'gallery video');

const createGalleryVideo = async (req, res, next) => {
  _galleryVideo.createOne({ ...req.body, createdBy: req.user._id }, res, next);
};

const getGalleryVideo = async (req, res, next) => {
  _galleryVideo.getOne({ _id: req.params.id }, res, next);
};

const getAllGalleryVideo = async (req, res, next) => {
  _galleryVideo.getMany({}, res, next);
};

const updateGalleryVideo = async (req, res, next) => {
  _galleryVideo.updateOne(
    [{ _id: req.params.id }, { ...req.body }, { new: true }],
    res,
    next
  );
};

const removeGalleryVideo = async (req, res, next) => {
  _galleryVideo.removeOne({ _id: req.params.id }, res, next);
};

module.exports = {
  createGalleryVideo,
  getGalleryVideo,
  getAllGalleryVideo,
  updateGalleryVideo,
  removeGalleryVideo,
};
