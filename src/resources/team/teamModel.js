const { Schema, model } = require('mongoose');

const teamControllers = new Schema(
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
  },
  { timestamps: true }
);

const Team = model('Team', teamControllers);

module.exports = Team;
