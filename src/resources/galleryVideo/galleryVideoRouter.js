const { Router } = require('express');
const controllers = require('./galleryVideoControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllGalleryVideo)
  .post(protect, controllers.createGalleryVideo);

router
  .route('/:id')
  .get(controllers.getGalleryVideo)
  .put(protect, controllers.updateGalleryVideo)
  .delete(protect, controllers.removeGalleryVideo);

module.exports = router;
