const { Schema, model } = require('mongoose');

const gallerySchema = new Schema(
  {
    title: {
      type: 'string',
      required: true,
    },
    videoLink: {
      type: 'string',
      required: true,
    },
  },
  { timestamps: true }
);

const GalleryPhoto = model('GalleryPhoto', gallerySchema);

module.exports = GalleryPhoto;
