const ObjectId = require("mongodb").ObjectID;

const FIND_RESERVATION = async params => {
  const [obj, args, { reservation }] = [...params];

  if (obj) {
    return await reservation.find({ user_id_email: obj.user_id_email });
  } else {
    return await reservation.find(args);
  }
};

// 다시해야해
const GET_DASHBOARD_COUNT = async params => {
  const [obj, args, ctx] = [...params];
  const { code } = args;
  const { hospital, product, reservation } = ctx;
  let res = {};

  const productListOfHospital = await product.find({ hospitalCode: code });
  productListOfHospital.forEach( item => {
    // console.log( item.productName );
    // res.item.productName = [];
  });

  const b = await reservation.find({ hospitalCode: code });

};

export { FIND_RESERVATION, GET_DASHBOARD_COUNT };

// {
//   "큐오필 1cc": [101, 70, 31, 69, 4.5];
// }
