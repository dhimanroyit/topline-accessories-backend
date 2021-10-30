const { Router } = require('express');
const galleryPhotoControllers = require('./galleryPhotoControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(galleryPhotoControllers.getMany)
  .post(protect, galleryPhotoControllers.createOne);

router
  .route('/:id')
  .get(galleryPhotoControllers.getOne)
  .put(protect, galleryPhotoControllers.updateOne)
  .delete(protect, galleryPhotoControllers.removeOne);

module.exports = router;
