const { Router } = require('express');
const userControllers = require('./userControllers');

const router = Router();

router.route('/').get(userControllers.getMany).post(userControllers.createOne);

router
  .route('/:id')
  .get(userControllers.getOne)
  .put(userControllers.updateOne)
  .delete(userControllers.removeOne);

module.exports = router;
