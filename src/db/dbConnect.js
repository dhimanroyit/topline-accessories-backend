const mongoose = require('mongoose');
const env = require('dotenv');

env.config();

const url = `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.tnrrg.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
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
