const { Router } = require('express');
const controllers = require('./teamControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllTeam)
  .post(protect, controllers.createTeam);

router
  .route('/:id')
  .get(controllers.getTeam)
  .put(protect, controllers.updateTeam)
  .delete(protect, controllers.removeTeam);

module.exports = router;
