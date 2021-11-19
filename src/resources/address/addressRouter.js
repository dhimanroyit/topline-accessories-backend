const { Router } = require('express');
const controllers = require('./galleryPhotoControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllGalleryPhoto)
  .post(protect, controllers.createGalleryPhoto);

router
  .route('/:id')
  .get(controllers.getGalleryPhoto)
  .put(protect, controllers.updateGalleryPhoto)
  .delete(protect, controllers.removeGalleryPhoto);

module.exports = router;
