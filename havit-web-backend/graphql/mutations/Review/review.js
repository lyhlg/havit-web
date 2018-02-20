const ObjectId = require('mongodb').ObjectID;

const ADD_REVIEW = async (params, reserveNumCal) => {
  const [obj, args, ctx] = [...params];
  // client 가 productID를 String 형태로 전달하기 때문에 변환
  args.product = ObjectId(args.product);

  // review 테이블에 해당 내용 update
  const targetReview = (await new ctx.review(args).save());

  // user 테이블과 product 테이블에 각각 review 내용 update
  const save = async (id) => {
    await ctx.user.update(
      { user_id_email: args.user_id_email },
      { $push: { reviews: id } } );
    return await ctx.product.update(
      { _id: ObjectId(args.product) },
      { $push: { reviews: id } } )
  }

  save(targetReview._id);
  // 추가된 Review 내용 Return
  return targetReview;
};

export default ADD_REVIEW;
