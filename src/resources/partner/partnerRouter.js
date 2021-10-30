const { Router } = require('express');
const partnerControllers = require('./partnerControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(partnerControllers.getMany)
  .post(protect, partnerControllers.createOne);

router
  .route('/:id')
  .get(partnerControllers.getOne)
  .put(protect, partnerControllers.updateOne)
  .delete(protect, partnerControllers.removeOne);

module.exports = router;
