const express = require('express');
const cacheController = require('./../controllers/cacheController');

const router = express.Router();

router
  .route('/')
  .get(cacheController.getAllCache)//Get all
  .post(cacheController.createCache)//Create one cache item
  .delete(cacheController.deleteAllCache);//Delete all

router
  .route('/:id')
  .get(cacheController.getCache)//Get one
  .patch(cacheController.updateCache)//Partial update
  .delete(cacheController.deleteCache);//Delete one

module.exports = router;
