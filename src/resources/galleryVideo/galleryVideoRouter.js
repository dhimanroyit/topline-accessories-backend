const { Router } = require('express');
const GalleryVideoControllers = require('./galleryVideoControllers');

const router = Router();

router
  .route('/')
  .get(GalleryVideoControllers.getMany)
  .post(GalleryVideoControllers.createOne);

router
  .route('/:id')
  .get(GalleryVideoControllers.getOne)
  .put(GalleryVideoControllers.updateOne)
  .delete(GalleryVideoControllers.removeOne);

module.exports = router;
