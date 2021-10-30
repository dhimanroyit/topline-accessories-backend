const { Router } = require('express');
const productControllers = require('./productControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(productControllers.getMany)
  .post(protect, productControllers.createOne);

router
  .route('/:id')
  .get(productControllers.getOne)
  .put(protect, productControllers.updateOne)
  .delete(protect, productControllers.removeOne);

module.exports = router;
