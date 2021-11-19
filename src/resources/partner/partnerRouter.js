const { Router } = require('express');
const controllers = require('./partnerControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllPartner)
  .post(protect, controllers.createPartner);

router
  .route('/:id')
  .get(controllers.getPartner)
  .put(protect, controllers.updatePartner)
  .delete(protect, controllers.removePartner);

module.exports = router;
