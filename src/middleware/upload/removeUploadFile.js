const fs = require('fs');
const url = require('url');
const path = require('path');
const dotEnv = require('dotenv');

dotEnv.config();

const removeUploadFile = (fileUrl) => {
  const urlParsed = new url.URL(fileUrl);
  const fileName = path.basename(urlParsed.pathname);
  const removeFile = `${process.env.UPLOAD_FOLDER}${fileName}`;
  fs.rm(removeFile, { recursive: true, force: true }, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
};

module.exports = removeUploadFile;
