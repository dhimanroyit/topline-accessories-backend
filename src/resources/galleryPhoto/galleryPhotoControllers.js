const GalleryPhoto = require('./galleryPhotoModel');
const crudOperations = require('../../utils/crudOperations');
const { removeUploadFile } = require('../../middleware/upload');

const _galleryPhoto = crudOperations(GalleryPhoto, 'gallery photo');

const createGalleryPhoto = async (req, res, next) => {
  if (!req.file) {
    next(new BadRequest('gallery image must be upload'));
  } else if (req.file) {
    const galleryImg = `/public/upload/${req.file.originalname}`;
    const galleryBody = {
      ...req.body,
      galleryImg,
      createdBy: req.user._id,
    };
    _galleryPhoto.createOne({ ...galleryBody }, res, next);
  }
};

const getGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.getOne({ _id: req.params.id }, res, next);
};

const getAllGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.getMany({}, res, next);
};

const updateGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.updateOne(
    async (model) => {
      let galleryImg = null;
      if (req.file?.originalname) {
        const gallery = await model.findById(req.params.id).lean().exec();
        if (gallery.galleryImg) {
          removeUploadFile(gallery.galleryImg);
        }
        galleryImg = `/public/upload/${req.file.originalname}`;
      }
      return await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body, ...(galleryImg && { galleryImg }) },
          { new: true }
        )
        .lean()
        .exec();
    },
    res,
    next
  );
};

const removeGalleryPhoto = async (req, res, next) => {
  _galleryPhoto.removeOne(
    async (model) => {
      const removeGallery = await model
        .findOneAndRemove({ _id: req.params.id })
        .lean()
        .exec();
      if (removeGallery.galleryImg) {
        removeUploadFile(removeGallery.galleryImg);
      }
      return removeGallery;
    },
    res,
    next
  );
};

module.exports = {
  createGalleryPhoto,
  getGalleryPhoto,
  getAllGalleryPhoto,
  updateGalleryPhoto,
  removeGalleryPhoto,
};
