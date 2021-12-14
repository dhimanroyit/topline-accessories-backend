const express = require('express');
const { createProfile } = require('./businessProfileController');
// const upload = require('../../middleware/upload');

const router = express.Router();
// upload.single('profile'),
router.route('/').post(createProfile);

// router.route('/:id').get().put().delete();

module.exports = router;
