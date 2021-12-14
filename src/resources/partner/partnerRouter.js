const { Router } = require('express');
const controllers = require('./partnerControllers');
const { protect } = require('../../middleware/auth');
const { upload, uploadFile } = require('../../middleware/upload');
const router = Router();

router
  .route('/')
  .get(controllers.getAllPartner)
  .post(
    protect,
    upload.single('partnerImg'),
    uploadFile,
    controllers.createPartner
  );

router
  .route('/:id')
  .get(controllers.getPartner)
  .put(
    protect,
    upload.single('partnerImg'),
    uploadFile,
    controllers.updatePartner
  )
  .delete(protect, controllers.removePartner);

module.exports = router;
