const ObjectId = require('mongodb').ObjectID;

const GET_BANNER_LIST = async ( params ) => {
  const [obj, args, ctx] = [...params];
  const targetField = args.type;
  switch (targetField) {
    case 'totalBanners': {
      return (await ctx.banner.findOne({}, { _id: 0 })).totalBanners;
      break;
    }
    case 'skinBanners': {
      return (await ctx.banner.findOne({}, { _id:0 } )).skinBanners;
      break;
    }
    case 'beautyBanners': {
      return (await ctx.banner.findOne({}, { _id: 0 })).beautyBanners;
      break;
    }
  }
};

const GET_BANNER_FROM_PRODUCT = async ( params, target ) => {
  const [obj, args, ctx] = [...params];
  return await ctx.product.find({ _id: ObjectId(obj)});
}

export {
  GET_BANNER_LIST,
  GET_BANNER_FROM_PRODUCT
};
