const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  totalBanner : Array,
  skinBanner: Array,
  beautyBanner: Array
});

module.exports = mongoose.model('banner', bannerSchema);
