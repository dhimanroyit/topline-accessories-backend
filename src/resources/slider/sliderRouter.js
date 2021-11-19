const { Router } = require('express');
const controllers = require('./sliderControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllSlider)
  .post(protect, controllers.createSlider);

router
  .route('/:id')
  .get(controllers.getSlider)
  .put(protect, controllers.updateSlider)
  .delete(protect, controllers.removeSlider);

module.exports = router;
