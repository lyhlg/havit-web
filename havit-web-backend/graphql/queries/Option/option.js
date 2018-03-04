const FIND_OPTION = params => {
  const [obj, args, ctx] = [...params];
  const { productId } = obj;
  const { productOption } = ctx;

  return productOption.findOne({productId});
};

export { FIND_OPTION };
