const mongoose = require('mongoose');

const teamControllers = new mongoose.Schema(
  {
    name: {
      type: 'string',
      required: true,
    },
    designation: {
      type: 'string',
      required: true,
    },
    avatarImg: {
      type: 'string',
      required: true,
    },
    phone: {
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

module.exports = mongoose.model('Team', teamControllers);
