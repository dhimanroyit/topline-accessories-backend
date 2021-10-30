const { Schema, model } = require('mongoose');

const partnerSchema = new Schema(
  {
    title: {
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

const Partner = model('Partner', partnerSchema);

module.exports = Partner;
