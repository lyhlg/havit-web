const FIND_RESERVATION = async params => {
  const [obj, args, ctx] = [...params];
  const { reservation } = ctx;

  if (obj) {
    return await reservation.find({ user_id_email: obj.user_id_email });
  } else {
    return await reservation.find(args);
  }
};

const GET_OPENED_NUMBER = async params => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode } = args;
  const { reservation } = ctx;

  return await reservation
    .find({ hospitalCode: hospitalCode, openPhoneNum: 1 })
    .sort({ reserveNum:1 });
};

export { FIND_RESERVATION, GET_OPENED_NUMBER };
