const { Router } = require('express');
const aboutControllers = require('./aboutControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(aboutControllers.getMany)
  .post(protect, aboutControllers.createOne);

router
  .route('/:id')
  .get(aboutControllers.getOne)
  .put(protect, aboutControllers.updateOne)
  .delete(protect, aboutControllers.removeOne);

module.exports = router;
