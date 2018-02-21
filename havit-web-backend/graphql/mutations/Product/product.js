const ADD_LIKE_PRODUCT = async ( params ) => {
  const [obj, args, ctx] = [...params];
  let checkAlreadyLikeIt = false;
  let userInfo = async () => {
    return await ctx.user.findOne({ user_id_email: args.user_id_email });
  };

  // user 테이블에 likeProduct에 이미 해당 상품을 찜 해뒀는지 확인
  (await ctx.user.findOne({ user_id_email: args.user_id_email })).likeProduct
    .forEach(item => {
      if (item === args.productId) {
        checkAlreadyLikeIt = !checkAlreadyLikeIt;
      }}
    )

  // 해당 상품이 찜이 안되었을 경우에만 추가
  if (!checkAlreadyLikeIt) {
    await ctx.user.update(
      { user_id_email: args.user_id_email },
      { $push: { likeProduct: args.productId } });
  }

  return userInfo();
}

export default ADD_LIKE_PRODUCT;
