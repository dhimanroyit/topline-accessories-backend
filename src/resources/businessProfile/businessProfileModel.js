const mongoose = require('mongoose');

const businessProfileSchema = new mongoose.Schema({
  title: String,
  profile: {
    type: String,
    required: [true, 'profile must be required'],
  },
});

module.exports = mongoose.model('BusinessProfile', businessProfileSchema);
