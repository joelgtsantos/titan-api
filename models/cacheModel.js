const mongoose =  require('mongoose');

const cacheSchema = new mongoose.Schema({
  key: {
    type: String,
    default: " "
  },
  value: {
    type: String,
    default: " "
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

const Cache = mongoose.model('Cache', cacheSchema);

module.exports = Cache;