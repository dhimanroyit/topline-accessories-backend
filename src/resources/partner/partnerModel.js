const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema(
  {
    title: {
      type: 'string',
      required: true,
    },
    img: {
      type: 'string',
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
