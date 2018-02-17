const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  totalBanner : [String],
  skinBanner: [String],
  beautyBanner: [String]
});

module.exports = mongoose.model('banner', bannerSchema);
