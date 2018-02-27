const ObjectId = require("mongodb").ObjectID;

const FIND_REVIEW = async params => {
  const [obj, args, ctx] = [...params];

  if (obj) {
    return obj.reviews.map(async item => {
      return await ctx.review.findOne({ _id: ObjectId(item) });
    });
  } else {
    return await ctx.review.find(args);
  }
};

export default FIND_REVIEW;
