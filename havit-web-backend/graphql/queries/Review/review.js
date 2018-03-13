const ObjectId = require("mongodb").ObjectID;

const FIND_REVIEW = async params => {
  const [obj, args, ctx] = [...params];
  if (obj) {
    const reviews = obj.reviews.map(async item => {
      return await ctx.review.findOne({ _id: ObjectId(item) });
    });
    return await Promise.all(reviews).then(res => res.reverse());
  } else {
    return await ctx.review.find(args).sort({ _id: -1 });
  }
};

export default FIND_REVIEW;
