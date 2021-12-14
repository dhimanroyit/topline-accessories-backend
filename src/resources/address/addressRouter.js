const { Router } = require('express');
const controllers = require('./addressControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllAddress)
  .post(protect, controllers.createAddress);

router
  .route('/:id')
  .get(controllers.getAddress)
  .put(protect, controllers.updateAddress)
  .delete(protect, controllers.removeAddress);

module.exports = router;
