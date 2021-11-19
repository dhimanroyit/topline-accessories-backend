const { Router } = require('express');
const controllers = require('./aboutControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllAbout)
  .post(protect, controllers.createAbout);

router
  .route('/:id')
  .get(controllers.getAbout)
  .put(protect, controllers.updateAbout)
  .delete(protect, controllers.removeAbout);

module.exports = router;
