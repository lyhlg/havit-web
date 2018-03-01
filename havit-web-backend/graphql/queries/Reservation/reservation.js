const FIND_RESERVATION = async params => {
  const [obj, args, { reservation }] = [...params];

  if (obj) {
    return await reservation.find({ user_id_email: obj.user_id_email });
  } else {
    return await reservation.find(args);
  }
};



export { FIND_RESERVATION };
