const userModel = require('../resources/user/userModel');
const responseHandler = require('../utils/responseHandler');
const Unauthorized = require('../utils/error/Unauthorized');
const NotFound = require('../utils/error/NotFound');
const BadRequest = require('../utils/error/BadRequest');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');

dotEnv.config();

// token generate function
const newTokenGenerate = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};
// token verify function
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return reject(err);
      }
      resolve(payload);
    });
  });
};
// user admin authentication function
const checkRole = (roles) => async (req, res, next) => {
  !roles.includes(req.user.role)
    ? next(new Unauthorized('user not admin'))
    : next();
};

const emailVerify = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      throw new BadRequest('email already use');
    }
    next();
  } catch (err) {
    next(err);
  }
};

const signIn = async (req, res, next) => {
  try {
    const user = await userModel
      .findOne({ email: req.body.email })
      .select('email password')
      .exec();
    if (!user) throw new NotFound('user not found');
    const isPassMatch = await user.checkPass(req.body.password);
    if (!isPassMatch) throw new Unauthorized('password not match');
    const token = newTokenGenerate(user);
    const response = responseHandler(200, 'login successfully', { token });
    return res.status(response.statusCode).json(response).end();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith('Bearer ')) {
    const err = new Unauthorized('token not found');
    return next(err);
  }
  const token = bearer.split('Bearer ')[1].trim();

  try {
    const payload = await verifyToken(token);
    if (!payload) throw new Unauthorized('token not verify');
    const user = await userModel
      .findById(payload.id)
      .select('-password')
      .lean()
      .exec();
    if (!user) throw new Unauthorized('user not authorized');
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = { checkRole, signIn, emailVerify, protect };
