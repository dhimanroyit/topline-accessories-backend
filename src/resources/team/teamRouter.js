const { Router } = require('express');
const controllers = require('./teamControllers');
const { protect } = require('../../middleware/auth');
const { upload, uploadFile } = require('../../middleware/upload');
const router = Router();

router
  .route('/')
  .get(controllers.getAllTeam)
  .post(
    protect,
    upload.single('avatarImg'),
    uploadFile,
    controllers.createTeam
  );

router
  .route('/:id')
  .get(controllers.getTeam)
  .put(protect, upload.single('avatarImg'), uploadFile, controllers.updateTeam)
  .delete(protect, controllers.removeTeam);

module.exports = router;
