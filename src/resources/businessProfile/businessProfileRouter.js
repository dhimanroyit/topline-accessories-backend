const express = require('express');
const { createProfile } = require('./businessProfileController');
const upload = require('../../middleware/upload');

const router = express.Router();

router.route('/').post(upload.single('profile'), createProfile);

// router.route('/:id').get().put().delete();

module.exports = router;
