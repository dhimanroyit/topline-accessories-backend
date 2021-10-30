const { Router } = require('express');
const GalleryVideoControllers = require('./galleryVideoControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(GalleryVideoControllers.getMany)
  .post(protect, GalleryVideoControllers.createOne);

router
  .route('/:id')
  .get(GalleryVideoControllers.getOne)
  .put(protect, GalleryVideoControllers.updateOne)
  .delete(protect, GalleryVideoControllers.removeOne);

module.exports = router;
