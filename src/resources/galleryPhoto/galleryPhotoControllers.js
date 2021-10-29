const GalleryPhoto = require('./galleryPhotoModel');
const { crudControllers } = require('../../utils/crud');

const galleryPhotoControllers = crudControllers(GalleryPhoto);

module.exports = galleryPhotoControllers;
