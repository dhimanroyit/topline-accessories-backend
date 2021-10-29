const { Router } = require('express');
const aboutControllers = require('./aboutControllers');

const router = Router();

router
  .route('/')
  .get(aboutControllers.getMany)
  .post(aboutControllers.createOne);

router
  .route('/:id')
  .get(aboutControllers.getOne)
  .put(aboutControllers.updateOne)
  .delete(aboutControllers.removeOne);

module.exports = router;
