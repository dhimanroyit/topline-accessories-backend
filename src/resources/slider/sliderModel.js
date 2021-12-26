const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    sliderImg: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    __v: { type: Number, select: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Slider', sliderSchema);
