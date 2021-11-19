const { Router } = require('express');
const controllers = require('./userControllers');

const router = Router();

router.route('/').get(controllers.getAllUser).post(controllers.createUser);

router
  .route('/:id')
  .get(controllers.getUser)
  .put(controllers.updateUser)
  .delete(controllers.removeUser);

module.exports = router;
