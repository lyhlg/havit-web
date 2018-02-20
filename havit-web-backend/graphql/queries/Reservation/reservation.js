const FIND_RESERVATION = async ( params ) => {
  const [obj, args, ctx] = [...params];
  if ( obj ) {
    return await ctx.reservation.find({ user_id_email: obj.user_id_email });
  } else {
    return await ctx.reservation.find(args);
  }
};

export default FIND_RESERVATION;
