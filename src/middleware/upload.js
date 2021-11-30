const multer = require('multer');
const path = require('path');

const UPLOADS_FOLDER = './uploads/';

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName = `${file.originalname
      .replace(fileExt, '')
      .toLowerCase()
      .split(' ')
      .join('-')}-${Date.now()}`;
    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'sliderImg') {
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) {
        cb(null, true);
      } else {
        cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
      }
    } else if (file.fieldname === 'profile') {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('only .pdf format allowed'));
      }
    }
  },
});

module.exports = upload;
