const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    partnerImg: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Partner', partnerSchema);
