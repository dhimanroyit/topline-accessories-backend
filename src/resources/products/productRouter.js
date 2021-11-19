const { Router } = require('express');
const { protect } = require('../../middleware/auth');
const controllers = require('./productControllers');

const router = Router();

router
  .route('/')
  .get(controllers.getAllProduct)
  .post(protect, controllers.createProduct);

router
  .route('/:id')
  .get(controllers.getProduct)
  .put(protect, controllers.updateProduct)
  .delete(protect, controllers.removeProduct);

module.exports = router;
