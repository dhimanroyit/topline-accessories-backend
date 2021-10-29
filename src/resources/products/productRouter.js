const { Router } = require('express');
const productControllers = require('./productControllers');

const router = Router();

router
  .route('/')
  .get(productControllers.getMany)
  .post(productControllers.createOne);

router
  .route('/:id')
  .get(productControllers.getOne)
  .put(productControllers.updateOne)
  .delete(productControllers.removeOne);

module.exports = router;
