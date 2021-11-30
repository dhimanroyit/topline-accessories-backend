const { Router } = require('express');
const controllers = require('./callInfoControllers');
const { protect } = require('../../middleware/auth');

const router = Router();

router
  .route('/')
  .get(controllers.getAllCallInfo)
  .post(protect, controllers.createCallInfo);

router
  .route('/:id')
  .get(controllers.getCallInfo)
  .put(protect, controllers.updateCallInfo)
  .delete(protect, controllers.removeCallInfo);

module.exports = router;
