const GET_PAYMENT = async params => {
  const [ obj, args, ctx ] = [...params];
  const { code } = args;
  const { payment } = ctx;
  return await payment.findOne({code:code});
};

export { GET_PAYMENT };
