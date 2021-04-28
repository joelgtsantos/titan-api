const Cache = require('./../models/cacheModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

exports.getAllCache = factory.getAll(Cache);
exports.getCache = factory.getOne(Cache);
exports.createCache = factory.createOne(Cache);
exports.updateCache = factory.updateOne(Cache);
exports.deleteCache = factory.deleteOne(Cache);
exports.deleteAllCache = factory.deleteAll(Cache);