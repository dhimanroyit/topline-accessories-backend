const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    email: {
      type: 'string',
      require: [true, 'email mast be required'],
    },
    password: {
      type: 'string',
      require: [true, 'password mast be required'],
    },
    role: {
      type: String,
      enum: ['admin', 'editor'],
    },
  },
  { timestamp: true }
);

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});
userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

module.exports = model('User', userSchema);
