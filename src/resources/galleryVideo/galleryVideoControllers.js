const GalleryVideo = require('./galleryVideoModel');
const { crudControllers } = require('../../utils/crud');

const galleryVideoControllers = crudControllers(GalleryVideo);

module.exports = galleryVideoControllers;
