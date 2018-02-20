const ObjectId = require('mongodb').ObjectID;

const FIND_PRODUCT = async (params) => {
  const [obj, args, ctx] = [...params];
  return await ctx.product.find(args);
};

const LIKE_PRODUCT = async (params) => {
  const [obj, args, ctx] = [...params];
  return (await ctx.user.findOne(args)).likeProduct
    .map(async item => {
      return await ctx.product.findOne({ _id: ObjectId(item) });
    })
}

export {
  FIND_PRODUCT,
  LIKE_PRODUCT
};
