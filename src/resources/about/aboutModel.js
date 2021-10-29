const { Schema, model } = require('mongoose');

const aboutSchema = new Schema(
  {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    img: {
      type: 'string',
      required: true,
    },
  },
  { timestamps: true }
);

const About = model('About', aboutSchema);

module.exports = About;
