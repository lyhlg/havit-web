const ObjectId = require("mongodb").ObjectID;

const GET_BANNER_LIST = async params => {
  const [obj, args, ctx] = [...params];
  const { id } = args;
  const { banner } = ctx;

  return id
    ? banner.find({_id: id}).sort({ priority: 1 })
    : banner.find().sort({ priority: 1 });
};

const GET_BANNER_FROM_PRODUCT = async params => {
  const [obj, args, ctx] = [...params];
  const { product } = ctx;
  return await product.findOne(
    { _id: ObjectId(obj.product) },
    { productId: 1, _id: 0 }
  );
};

export { GET_BANNER_LIST, GET_BANNER_FROM_PRODUCT };
