const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
  socialLink: String,
  vendor: {
    type: String,
    enum: ['facebook', 'twitter', 'youtube', 'linkedin', 'whatsapp'],
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  __v: { type: String, select: false },
});

module.exports = mongoose.model('Social', socialSchema);
