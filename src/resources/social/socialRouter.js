const { Router } = require('express');
const controllers = require('./socialControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .post(protect, controllers.createSocial)
  .get(controllers.getAllSocial);

router
  .route('/:id')
  .get(controllers.getSocial)
  .put(protect, controllers.updateSocial)
  .delete(protect, controllers.removeSocial);

module.exports = router;
