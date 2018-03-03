const GET_PAYMENT = async params => {
  const [obj, args, ctx] = [...params];
  const { user_id_email } = args;
  const { payment, hospital } = ctx;
  let res = {}, code;

  if (Object.keys(args).length) {
    code = (await hospital.findOne({ adminAccount: user_id_email })).code;
  }
  return await payment.findOne({ code: code });
};

export { GET_PAYMENT };
