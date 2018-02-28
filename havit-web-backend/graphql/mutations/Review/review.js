const ObjectId = require("mongodb").ObjectID;

const ADD_REVIEW = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email, stars, comment, productId } = args;
  const { user, product, review, event } = ctx;

  const existInEvent = await event.findOne({ productId });
  const targetReview = await new review(args).save();

  await user.update(
    { user_id_email: args.user_id_email },
    { $push: { reviews: targetReview._id } }
  );
  if (existInEvent) {
    await event.update({ productId }, { $push: { reviews: targetReview._id } });
  } else {
    await product.update({ productId }, { $push: { reviews: targetReview._id } });
  }
  return targetReview;
};

export default ADD_REVIEW;
