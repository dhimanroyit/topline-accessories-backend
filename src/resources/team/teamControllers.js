const Team = require('./teamModel');
const crudOperations = require('../../utils/crudOperations');
const { removeUploadFile } = require('../../middleware/upload');

const _team = crudOperations(Team, 'team');

const createTeam = async (req, res, next) => {
  if (!req.file) {
    next(new BadRequest('team image must be upload'));
  } else if (req.file) {
    const avatarImg = `/public/upload/${req.file.originalname}`;

    const teamBody = {
      ...req.body,
      avatarImg,
      createdBy: req.user._id,
    };
    _team.createOne({ ...teamBody, createdBy: req.user._id }, res, next);
  }
};

const getTeam = async (req, res, next) => {
  _team.getOne({ _id: req.params.id }, res, next);
};

const getAllTeam = async (req, res, next) => {
  _team.getMany({}, res, next);
};

const updateTeam = async (req, res, next) => {
  _team.updateOne(
    async (model) => {
      let avatarImg = null;
      if (req.file?.originalname) {
        const team = await model.findById(req.params.id).lean().exec();
        if (team.avatarImg) {
          removeUploadFile(team.avatarImg);
        }
        avatarImg = `/public/upload/${req.file.originalname}`;
      }
      return await model
        .findOneAndUpdate(
          { _id: req.params.id },
          { ...req.body, ...(avatarImg && { avatarImg }) },
          { new: true }
        )
        .lean()
        .exec();
    },
    res,
    next
  );
};

const removeTeam = async (req, res, next) => {
  _team.removeOne(
    async (model) => {
      const removeTeam = await model
        .findOneAndRemove({ _id: req.params.id })
        .lean()
        .exec();
      if (removeTeam.avatarImg) {
        removeUploadFile(removeTeam.avatarImg);
      }
      return removeTeam;
    },
    res,
    next
  );
};

module.exports = {
  createTeam,
  getTeam,
  getAllTeam,
  updateTeam,
  removeTeam,
};
