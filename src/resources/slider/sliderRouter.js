const { Router } = require('express');
const sliderControllers = require('./sliderControllers');

const router = Router();

router
  .route('/')
  .get(sliderControllers.getMany)
  .post(sliderControllers.createOne);

router
  .route('/:id')
  .get(sliderControllers.getOne)
  .put(sliderControllers.updateOne)
  .delete(sliderControllers.removeOne);

module.exports = router;
