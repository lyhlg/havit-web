const FIND_HOSPITAL_ADMIN = async ( params ) => {
  const [obj, args, ctx] = [...params];
  if ( args ) {
    return await ctx.findOne(args);
  } else {
    return await ctx.find();
  }

};

export default FIND_HOSPITAL_ADMIN;
