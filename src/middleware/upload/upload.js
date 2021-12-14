const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  // limits: {
  //   fileSize: 1000000,
  // },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpg, .png or .jpeg format allowed!'));
    }
  },
});

module.exports = upload;

// const uploadImageValidator = (fieldName) => {
//   return async (req, res, next) => {
//     const { file } = req;
//     if (file?.fieldname === fieldName) {
//       if (
//         file.mimetype === 'image/png' ||
//         file.mimetype === 'image/jpg' ||
//         file.mimetype === 'image/jpeg'
//       ) {
//         next();
//       } else {
//         next(new Error('Only .jpg, .png or .jpeg format allowed!'));
//       }
//     }
//     next();
//   };
// };
