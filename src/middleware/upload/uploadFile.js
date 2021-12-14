const fs = require('fs');
const sharp = require('sharp');
const dotEnv = require('dotenv');
const convertFileNameWebpExt = require('./convertFileNameWebpExt');

dotEnv.config();

const uploadSingleFile = async (reqFile, next) => {
  try {
    const { buffer, originalname } = reqFile;
    reqFile.originalname = convertFileNameWebpExt(originalname);
    const webpBuffer = await sharp(buffer).webp().toBuffer();
    await sharp(webpBuffer)
      .webp({ quality: 20 })
      .toFile(`${process.env.UPLOAD_FOLDER}${reqFile.originalname}`);
  } catch (err) {
    next(err);
  }
};

const uploadFile = async (req, res, next) => {
  if (req.file || req.files) {
    fs.access(process.env.UPLOAD_FOLDER, (error) => {
      if (error) {
        fs.mkdirSync(process.env.UPLOAD_FOLDER);
      }
    });
    if (req.file) {
      uploadSingleFile(req.file, next);
    } else if (req.files && Array.isArray(req.files)) {
      req.files.forEach((file) => {
        uploadSingleFile(file, next);
      });
    } else if (req.files && !Array.isArray(req.files)) {
      const objKey = Object.keys(req.files);
      for (let key of objKey) {
        req.files[key].forEach((file) => {
          uploadSingleFile(file, next);
        });
      }
    }
  }
  next();
};

module.exports = uploadFile;
