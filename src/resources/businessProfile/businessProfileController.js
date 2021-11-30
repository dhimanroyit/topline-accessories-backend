const { promisify } = require('util');
const Profile = require('./businessProfileModel');

const createProfile = async (req, res, next) => {
  const imgUrl = `${req.protocol}://${req.get('host')}api/v1/public/upload/${
    req.file.filename
  }`;
  console.log(imgUrl);
  console.log(__dirname);
  console.log(req.file.filename);

  res.json('hello world');
};

module.exports = { createProfile };
