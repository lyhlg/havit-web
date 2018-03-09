const ObjectId = require("mongodb").ObjectID;

const GET_DASHBOARD_COUNT = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email } = args;
  const { hospital, product, review, reservation, salesCount } = ctx;
  let res = {},
    code;

  if (Object.keys(args).length) {
    code = (await hospital.findOne({ adminAccount: user_id_email })).code;
  }

  const productListOfHospital = await product.find(
    { hospitalCode: code },
    { productId: 1, _id: 0 }
  );

  // 확정률 계산 및 DB에 Update
  productListOfHospital.forEach(async item => {
    await salesCount.UpdateFixValue(item.productId, async res => {
      let changeFormat = Math.round(res).toString() + "%";

      await salesCount.update(
        { _id: item.productId },
        { $set: { fix: changeFormat } }
      );
    });
    const { reviews } = await product.findOne(
      { productId: item.productId },
      { _id: 0, reviews: 1 }
    );
    if (reviews.length !== 0) {
      let totalVal = reviews.map(async item => {
        let { stars } = await review.findOne(
          { _id: ObjectId(item) },
          { _id: 0, stars: 1 }
        );
        return stars;
      });
      // 아래를 안쓰면 totalVal을 사용하기 전에 promise에 들어간 값을 사용해서 값을 사용할 수가 없다.
      Promise.all(totalVal).then(async completed => {
        const res = completed.reduce((prev, curr) => prev + curr);
        const averageStarVal = Math.ceil(res / reviews.length);
        await salesCount.update(
          { _id: item.productId },
          { $set: { stars: averageStarVal } }
        );
      });
    }
  });
  return await productListOfHospital.map(async item => {
    return await salesCount.findOne({_id: item.productId})
  })

};

export { GET_DASHBOARD_COUNT };
