const mongoose = require('mongoose');
const env = require('dotenv');

env.config();

const url = `${process.env.MONGODB_URL}`;
const dbConnect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database connected successfully');
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnect;
