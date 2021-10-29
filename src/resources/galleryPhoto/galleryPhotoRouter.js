const { Router } = require('express');
const galleryPhotoControllers = require('./galleryPhotoControllers');

const router = Router();

router
  .route('/')
  .get(galleryPhotoControllers.getMany)
  .post(galleryPhotoControllers.createOne);

router
  .route('/:id')
  .get(galleryPhotoControllers.getOne)
  .put(galleryPhotoControllers.updateOne)
  .delete(galleryPhotoControllers.removeOne);

module.exports = router;
