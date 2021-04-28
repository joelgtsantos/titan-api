const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

exports.getAllCache = factory.getAll({});
exports.getCache = factory.getOne({}, { path: 'reviews' });
exports.createCache = factory.createOne({});
exports.updateCache = factory.updateOne({});
exports.deleteCache = factory.deleteOne({});