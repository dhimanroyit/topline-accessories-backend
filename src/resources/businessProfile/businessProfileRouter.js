const express = require('express');
const controllers = require('./businessProfileController');
const uploadPdf = require('../../middleware/uploadPdf');
const { protect } = require('../../middleware/auth');

const router = express.Router();
router
  .route('/')
  .post(protect, uploadPdf.single('profile'), controllers.createProfile)
  .get(controllers.getAllProfile);

router
  .route('/:id')
  .get(controllers.getProfile)
  .put(protect, uploadPdf.single('profile'), controllers.updateProfile)
  .delete(protect, controllers.removeProfile);

module.exports = router;
