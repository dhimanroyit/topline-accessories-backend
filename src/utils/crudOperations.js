const responseHandler = require('./responseHandler');
const NotFound = require('./error/NotFound');

const createOne = (model, modelName) => async (condition, res, next) => {
  let saveDoc = null;
  try {
    if (condition instanceof Function) {
      saveDoc = await condition(model);
    } else {
      const doc = new model(condition);
      saveDoc = await doc.save();
    }

    const resDoc = responseHandler(
      201,
      `${modelName} create successfully`,
      saveDoc
    );
    res.status(resDoc.statusCode).json(resDoc).end();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getOne = (model, modelName) => async (condition, res, next) => {
  try {
    const doc =
      condition instanceof Function
        ? await condition(model)
        : await model.findOne(condition);
    if (!doc) {
      throw new NotFound(`${modelName} not found by id`);
    }
    const resDoc = responseHandler(200, `${modelName} get successfully`, doc);
    res.status(resDoc.statusCode).json(resDoc).end();
  } catch (err) {
    next(err);
  }
};

const getMany = (model, modelName) => async (condition, res, next) => {
  try {
    const doc =
      condition instanceof Function
        ? await condition(model)
        : await model.find(condition).lean().exec();
    if (!doc) {
      throw new NotFound('users not found');
    }
    const resDoc = responseHandler(200, `${modelName} get successfully`, doc);
    res.status(resDoc.statusCode).json(resDoc).end();
  } catch (err) {
    next(err);
  }
};

const updateOne = (model, modelName) => async (condition, res, next) => {
  try {
    const doc =
      condition instanceof Function
        ? await condition(model)
        : await model
            .findOneAndUpdate(...condition)
            .lean()
            .exec();
    if (!doc) {
      throw new NotFound(`${modelName} not found`);
    }
    const resDoc = responseHandler(
      200,
      `${modelName} update successfully`,
      doc
    );
    res.status(resDoc.statusCode).json(resDoc).end();
  } catch (err) {
    next(err);
  }
};

const removeOne = (model, modelName) => async (condition, res, next) => {
  try {
    const doc =
      condition instanceof Function
        ? await condition(model)
        : await model.findOneAndRemove(condition).lean().exec();
    if (!doc) {
      throw new NotFound(`${modelName} not found by id`);
    }
    const resDoc = responseHandler(
      200,
      `${modelName} delete successfully`,
      doc
    );
    res.status(resDoc.statusCode).json(resDoc).end();
  } catch (err) {
    next(err);
  }
};

const crudOperations = (model, modelName) => ({
  createOne: createOne(model, modelName),
  getOne: getOne(model, modelName),
  getMany: getMany(model, modelName),
  updateOne: updateOne(model, modelName),
  removeOne: removeOne(model, modelName),
});

module.exports = crudOperations;
