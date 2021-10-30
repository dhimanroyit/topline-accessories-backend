const { Router } = require('express');
const sliderControllers = require('./sliderControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(sliderControllers.getMany)
  .post(protect, sliderControllers.createOne);

router
  .route('/:id')
  .get(sliderControllers.getOne)
  .put(protect, sliderControllers.updateOne)
  .delete(protect, sliderControllers.removeOne);

module.exports = router;
