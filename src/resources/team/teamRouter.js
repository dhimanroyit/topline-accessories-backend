const { Router } = require('express');
const teamControllers = require('./teamControllers');

const router = Router();

router.route('/').get(teamControllers.getMany).post(teamControllers.createOne);

router
  .route('/:id')
  .get(teamControllers.getOne)
  .put(teamControllers.updateOne)
  .delete(teamControllers.removeOne);

module.exports = router;
