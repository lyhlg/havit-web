const ObjectId = require('mongodb').ObjectID;

const GET_BANNER_LIST = async ( params ) => {
  const [obj, args , { banner }] = [...params];
  if ( !args.type && args.subType ) {
    return [{type: "is empty", subType: "This Field is used with Type"}]
  }
  return await banner.find(args);
};

const GET_BANNER_FROM_PRODUCT = async ( params ) => {
  const [obj, args, { product }] = [...params];
  return await product.findOne({ _id: ObjectId(obj.product)});
}

export {
  GET_BANNER_LIST,
  GET_BANNER_FROM_PRODUCT
};
