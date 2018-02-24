const ObjectId = require('mongodb').ObjectID;

const FIND_PRODUCT = async ( params ) => {
  const [obj, args, ctx] = [...params];
  if (!args.limit) args.limit = 12;
  if (!args.page) args.page = 1;
  if ( args.id ) {
    const a = await ctx.product.find({ _id: ObjectId(args.id)})
    return a
  } else {
    const res = async (arg) => await ctx.product
      .find(arg)
      .sort({ _id: -1 })
      .skip((args.page - 1) * args.limit)
      .limit(args.limit);

    if ( obj ) {
      return (await ctx.product.findOne());
    } else {
      if ( !(args.type || args.subType) ){
        return res({});
      } else {
        if ( args.type && !args.subType ){
          return res({ type: args.type });
        } else if ( args.type && args.subType ) {
          return res({ type: args.type, subType: args.subType });
        }
      }
    }
  }
};

const LIKE_PRODUCT = async ( params ) => {
  const [obj, args, ctx] = [...params];
  if ( obj ) {
    return (await ctx.user.findOne({ user_id_email: obj.user_id_email })).likeProduct
      .map(async item => {
        return await ctx.product.findOne({ _id: ObjectId(item) });
      })
  }
  else {
    return (await ctx.user.findOne(args)).likeProduct
      .map(async item => {
        return await ctx.product.findOne({ _id: ObjectId(item) });
      })
  }
}

const GET_REVIEW_LIST_OF_PRODUCT = async ( params ) => {
  const [obj, args, ctx] = [...params];
  return obj.reviews.map(async item => {
    return await ctx.review.findOne({ _id: ObjectId(item) });
  })
}

const GET_PRODUCT_RESERVATION = async ( params ) => {
  const [{hospitalCode, productName}, args, {product}] = [...params];
  return await product.find({hospitalCode: hospitalCode, productName: productName});
}

export {
  FIND_PRODUCT,
  LIKE_PRODUCT,
  GET_REVIEW_LIST_OF_PRODUCT,
  GET_PRODUCT_RESERVATION
};
