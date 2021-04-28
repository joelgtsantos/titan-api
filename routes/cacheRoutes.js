const express = require('express');
const cacheController = require('./../controllers/cacheController');

const router = express.Router();

router
  .route('/')
  .get(cacheController.getAllCache)
  .post(cacheController.createCache);

router
  .route('/:id')
  .get(cacheController.getCache)
  .patch(cacheController.updateCache)
  .delete(cacheController.deleteCache);

module.exports = router;
