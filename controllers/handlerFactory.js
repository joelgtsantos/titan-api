const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {

    let doc = await Model.deleteOne({
      key: req.params.id 
    });

    if (!doc) {
      return next(new AppError('No cache element found with this Key', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    
    const doc = await Model.findByOneAndUpdate({
      key: req.params.id
    }, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No cache element found with this Key', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {

    const count = await Model.count({});
    
    //Compare the max number of cache items 
    if(count > process.env.TOTAL_CACHE_ITEMS){
      const older = await Model.findOne().sort({createAt: -1}).exec();
       await Model.deleteOne({
        key: older.key 
      });
    }

    //create a new one
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
    
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {

    let doc = await Model.find({
      key: req.params.id 
    });

    if (!doc.length) {
      return next(new AppError('Cache miss', 404));
    }

    res.status(200).json({
      status: 'Cache hit',
      data: {
        data: doc
      }
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc
      }
    });
  });

  exports.deleteAll = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.deleteMany({});

    if (!doc) {
      return next(new AppError('No cache element found with this Key', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

