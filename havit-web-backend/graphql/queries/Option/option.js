const GET_OPTIONS_OF_PRODUCT = params => {
  const [obj, args, ctx] = [...params];
  const { productId } = obj;
  const { productOption } = ctx;

  return productOption.findOne({productId});
};

export { GET_OPTIONS_OF_PRODUCT };
