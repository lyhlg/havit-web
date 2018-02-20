const FIND_REVIEW = async (params) => {
  const [obj, args, ctx] = [...params];
  return await ctx.review.find(args);
};

export default FIND_REVIEW;
