const fs = require('fs');
const path = require('path');
const dotEnv = require('dotenv');

dotEnv.config();

const removeUploadFile = (fileUrl) => {
  const fileName = path.basename(fileUrl);
  const removeFile = `${process.env.UPLOAD_FOLDER}${fileName}`;
  fs.rm(removeFile, { recursive: true, force: true }, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
};

module.exports = removeUploadFile;
