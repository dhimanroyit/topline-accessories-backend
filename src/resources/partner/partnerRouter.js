const { Router } = require('express');
const partnerControllers = require('./partnerControllers');

const router = Router();

router
  .route('/')
  .get(partnerControllers.getMany)
  .post(partnerControllers.createOne);

router
  .route('/:id')
  .get(partnerControllers.getOne)
  .put(partnerControllers.updateOne)
  .delete(partnerControllers.removeOne);

module.exports = router;
