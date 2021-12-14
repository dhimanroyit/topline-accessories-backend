const Profile = require('./businessProfileModel');
const crudOperations = require('../../utils/crudOperations');
const { removeUploadFile } = require('../../middleware/upload');

const _profile = crudOperations(Profile, 'business profile');

const createProfile = async (req, res, next) => {
  if (!req.file) {
    next(new BadRequest('business profile must be upload'));
  } else if (req.file) {
    console.log(req.file);
    const profile = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/public/upload/${req.file.filename}`;
    console.log(profile);
    const profileBody = {
      ...req.body,
      profile,
      createdBy: req.user._id,
    };
    _profile.createOne({ ...profileBody }, res, next);
  }
};

const getProfile = async (req, res, next) => {
  _profile.getOne({ _id: req.params.id }, res, next);
};

const getAllProfile = async (req, res, next) => {
  _profile.getMany({}, res, next);
};

const updateProfile = async (req, res, next) => {
  _profile.updateOne(
    async (model) => {
      let profile = null;
      if (req.file?.filename) {
        const businessProfile = await model
          .findById(req.params.id)
          .lean()
          .exec();
        if (businessProfile.profile) {
          removeUploadFile(businessProfile.profile);
        }
        profile = `${req.protocol}://${req.get('host')}/api/v1/public/upload/${
          req.file.filename
        }`;
      }
      return await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body, ...(profile && { profile }) },
          { new: true }
        )
        .lean()
        .exec();
    },
    res,
    next
  );
};

const removeProfile = async (req, res, next) => {
  _profile.removeOne(
    async (model) => {
      const removeProfile = await model
        .findOneAndRemove({ _id: req.params.id })
        .lean()
        .exec();
      if (removeProfile.profile) {
        removeUploadFile(removeProfile.profile);
      }
      return removeProfile;
    },
    res,
    next
  );
};

module.exports = {
  createProfile,
  getProfile,
  getAllProfile,
  updateProfile,
  removeProfile,
};
