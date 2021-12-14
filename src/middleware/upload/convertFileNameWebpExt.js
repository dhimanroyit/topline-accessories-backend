const path = require('path');
const shortid = require('shortid');

const convertFileNameWithWebpExt = (fileOriginalName) => {
  const fileExt = path.extname(fileOriginalName);
  const fileName = `${fileOriginalName
    .replace(fileExt, '')
    .toLowerCase()
    .split(' ')
    .join('-')}-${shortid.generate()}.webp`;
  return fileName;
};

module.exports = convertFileNameWithWebpExt;
