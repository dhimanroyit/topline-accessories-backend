const { promisify } = require('util');
const Profile = require('./businessProfileModel');

const createProfile = async (req, res, next) => {
  const imgUrl = `${req.protocol}://${req.get('host')}/public/${
    req.file.filename
  }`;
  console.log(imgUrl);
  console.log(__dirname);
  console.log(req.file.filename);

  res.json('hello world');
};

module.exports = { createProfile };
