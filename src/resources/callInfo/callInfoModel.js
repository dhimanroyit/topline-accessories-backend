const mongoose = require('mongoose');

const callInfoSchema = new mongoose.Schema(
  {
    callInfo: String,
    callInfoType: { type: String, enum: ['mobile', 'phone', 'email'] },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    __v: { type: Number, select: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CallInfo', callInfoSchema);
