const ObjectId = require('mongodb').ObjectID;

const FIND_PRODUCT = async ( params ) => {
  const [obj, args, {product}] = [...params];
  if (!args.limit) args.limit = 12;
  if (!args.page) args.page = 1;
  if ( args.id ) {
    return await product.find({ _id: ObjectId(args.id)})
  } else {
    const res = async (arg) => await product
      .find(arg)
      .sort({ _id: -1 })
      .skip((args.page - 1) * args.limit)
      .limit(args.limit);
    if ( obj ) {
      return (await product.findOne());
    } else if ( args.type || args.subType || args.productId ) {
      if (!args.type && args.subType) {
        return [{ type: "Type is empty, You must fill this" }];
      } else if ((args.productId && !(args.type || args.subType))) {
        return res({productId: args.productId});
      } else if (args.type){
        if (args.subType){
          return res({ type: args.type, subType: args.subType });
        } else {
          return res({ type: args.type });
        }
      }
    } else {
      return res({});
    }
  }
};

const LIKE_PRODUCT = async ( params ) => {
  const [obj, args, ctx] = [...params];
  const { user_id_email } = args;
  const { user, product } = ctx;
  if ( obj ) {
    return (await user.findOne({ user_id_email })).likeProduct
      .map(async item => {
        return await product.findOne({ productId: item });
      })
  }
  else {
    return (await user.findOne(args)).likeProduct
      .map(async item => {
        return await product.findOne({ productId: item });
      })
  }
}

const GET_REVIEW_LIST_OF_PRODUCT = async ( params ) => {
  const [obj, args, ctx] = [...params];
  const { review } = ctx;
  return obj.reviews.map(async item => {
    return await review.findOne({ _id: ObjectId(item) });
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
