const { Router } = require('express');
const { protect } = require('../../middleware/auth');
const controllers = require('./productControllers');
const { upload, uploadFile } = require('../../middleware/upload');

const router = Router();

router
  .route('/')
  .get(controllers.getAllProduct)
  .post(
    protect,
    upload.single('productImg'),
    uploadFile,
    controllers.createProduct
  );

router
  .route('/:id')
  .get(controllers.getProduct)
  .put(
    protect,
    upload.single('productImg'),
    uploadFile,
    controllers.updateProduct
  )
  .delete(protect, controllers.removeProduct);

module.exports = router;
