const { Router } = require('express');
const teamControllers = require('./teamControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(teamControllers.getMany)
  .post(protect, teamControllers.createOne);

router
  .route('/:id')
  .get(teamControllers.getOne)
  .put(protect, teamControllers.updateOne)
  .delete(protect, teamControllers.removeOne);

module.exports = router;
