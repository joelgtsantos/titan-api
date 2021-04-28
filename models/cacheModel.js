const mongoose =  require('mongoose');
const slugify = require('slugify');

const cacheSchema = new mongoose.Schema(
  {
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
      expires: '1m', //Works as a TTL
      default: Date.now
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Cache = mongoose.model('Cache', cacheSchema);

module.exports = Cache;