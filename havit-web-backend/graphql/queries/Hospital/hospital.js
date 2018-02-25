const ObjectId = require("mongodb").ObjectID;

const FIND_HOSPITAL = async ( params ) => {
  const [obj, args, ctx] = [...params];
  return await ctx.hospital.find(args);
};

const GET_HOSPITAL_RESERVATION_INFO = async ( params ) => {
  const [obj, args, ctx] = [...params];
  return (await ctx.hospital.findOne(
    { adminAccount: obj.adminAccount },
    { reservations: 1 }))
    .reservations.map(async item => {
      console.log(item);
      return await ctx.reservation.findOne({ reserveNum: item });
    });
}

const GET_HOSPITAL_PRODUCT_LIST = async ( params ) => {
  const [obj, args, ctx] = [...params];
  return obj.products.map(async item => {
    return await ctx.product.find({ _id: ObjectId(item) });
  })
}

export {
  FIND_HOSPITAL,
  GET_HOSPITAL_RESERVATION_INFO,
  GET_HOSPITAL_PRODUCT_LIST
}
