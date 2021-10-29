const { Schema, model } = require('mongoose');

const sliderSchema = new Schema(
  {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    sliderImg: {
      type: 'string',
      required: true,
    },
  },
  { timestamps: true }
);

const Slider = model('Slider', sliderSchema);

module.exports = Slider;
