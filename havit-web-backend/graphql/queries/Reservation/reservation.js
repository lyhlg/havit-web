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
  const { hospital, product, review, reservation, salesCount } = ctx;
  let res = {};

  const productListOfHospital = await product.find(
    { hospitalCode: code },
    { productId: 1, _id: 0 }
  );

  확정률 계산 및 DB에 Update
  productListOfHospital.forEach( async item => {
    await salesCount.UpdateFixValue(item.productId, async res => {
      let changeFormat = Math.round(res).toString() + "%";
      console.log(changeFormat);
      await salesCount.update({ _id: item.productId }, { $set: { fix: changeFormat } });
    });
  });

  const { reviews } = await product.findOne(
    { productId: 15 },
    { _id: 0, reviews: 1 }
  );
  console.log(reviews); // ["5a97850ef392da461f737c6c","5a97851cf392da461f737c6d"]

  let totalVal = reviews.map(async item => {
    let { stars } = await review.findOne(
      { _id: ObjectId(item) },
      { _id: 0, stars: 1 }
    );
    return stars;
  });

  // Promise.all(totalVal).then(completed => {
  //   console.log("completed:", completed);
  //   let res = completed.reduce((prev, curr) => prev + curr);

  //   const averageStarVal = Math.ceil(res / reviews.length * 2) / 2;
  //   productListOfHospital.forEach(async item => {
  //     await salesCount.UpdateStars(item, );
  //   });
  // });

  // averageStarVal 은 8.5/2 =4.25 -> 4.5로변경
};

export { FIND_RESERVATION, GET_DASHBOARD_COUNT };
