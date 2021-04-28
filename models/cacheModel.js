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
      expires: '1m',
      default: Date.now
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

cacheSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});


const Cache = mongoose.model('Cache', cacheSchema);

module.exports = Cache;