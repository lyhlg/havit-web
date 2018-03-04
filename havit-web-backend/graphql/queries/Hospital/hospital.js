const ObjectId = require("mongodb").ObjectID;

const FIND_HOSPITAL = async params => {
  // 사용 하는 쪽 없는듯?
  const [obj, args, ctx] = [...params];
  const { hospital } = ctx;
  return await hospital.find(args);
};

const GET_HOSPITAL_RESERVATION_INFO = async params => {
  const [obj, args, ctx] = [...params];
  return (await ctx.hospital.findOne(
    { adminAccount: obj.adminAccount },
    { reservations: 1 }
  )).reservations.map(async item => {
    console.log(item);
    return await ctx.reservation.findOne({ reserveNum: item });
  });
};

// const GET_HOSPITAL_PRODUCT_LIST = async params => {
//   const [obj, args, ctx] = [...params];
//   const { product } = ctx;
//   const a = await obj.products.map(async item => {
//     return await product.findOne({ productId: item });
//   });
//   console.log( a )
//   return a;
// };

export {
  FIND_HOSPITAL,
  GET_HOSPITAL_RESERVATION_INFO
  // GET_HOSPITAL_PRODUCT_LIST
};
