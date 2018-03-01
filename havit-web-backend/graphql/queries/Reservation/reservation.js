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
  const { hospital, product, reservation, salesCount } = ctx;
  let res = {};

  const productListOfHospital = await product.find(
    { hospitalCode: code },
    { productId: 1, _id: 0 }
  );

  productListOfHospital.forEach( async item => {
    await salesCount.UpdateFixValue(item.productId, async res => {
      let changeFormat = Math.round(res).toString() + "%";
      console.log(changeFormat);
      await salesCount.update({ _id: item.productId }, { $set: { fix: changeFormat } });
    });
  });


};

export { FIND_RESERVATION, GET_DASHBOARD_COUNT };
