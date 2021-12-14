const { Router } = require('express');
const controllers = require('./aboutControllers');
const { protect } = require('../../middleware/auth');
const { upload, uploadFile } = require('../../middleware/upload');

const router = Router();

router
  .route('/')
  .get(controllers.getAllAbout)
  .post(
    protect,
    upload.single('aboutImg'),
    uploadFile,
    controllers.createAbout
  );

router
  .route('/:id')
  .get(controllers.getAbout)
  .put(protect, upload.single('aboutImg'), uploadFile, controllers.updateAbout)
  .delete(protect, controllers.removeAbout);

module.exports = router;
