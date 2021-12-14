const { Router } = require('express');
const controllers = require('./galleryPhotoControllers');
const { protect } = require('../../middleware/auth');
const { upload, uploadFile } = require('../../middleware/upload');

const router = Router();

router
  .route('/')
  .get(controllers.getAllGalleryPhoto)
  .post(
    protect,
    upload.single('galleryImg'),
    uploadFile,
    controllers.createGalleryPhoto
  );

router
  .route('/:id')
  .get(controllers.getGalleryPhoto)
  .put(
    protect,
    upload.single('galleryImg'),
    uploadFile,
    controllers.updateGalleryPhoto
  )
  .delete(protect, controllers.removeGalleryPhoto);

module.exports = router;
