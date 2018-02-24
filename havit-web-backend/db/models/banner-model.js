const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 변경 필요
const bannerSchema = new Schema({
  totalBanners : [String],
  skinBanners: [String],
  beautyBanners: [String]
});

module.exports = mongoose.model('banner', bannerSchema, 'banners');

// dummy : 추후 관리자 업데이트 할 수 있도록 기능 구현 필요
/*
db.banners.insert({
  totalBanners: [
    ObjectId("5a8b9e2ae5fb2bb6ef38c8c8"),
    ObjectId("5a8b9323d485e3b7ca525abd"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8ca"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8cb"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8d0")
  ],
  skinBanners: [
    ObjectId("5a8b9323d485e3b7ca525abb"),
    ObjectId("5a8b9323d485e3b7ca525abe"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8cd"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8ce"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8cf")
  ],
  beautyBanners: [
    ObjectId("5a8b9323d485e3b7ca525abc"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8cc"),
    ObjectId("5a8b9323d485e3b7ca525abf"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8c7"),
    ObjectId("5a8b9e2ae5fb2bb6ef38c8c9")
  ]
})
*/
