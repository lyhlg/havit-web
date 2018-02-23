const FIND_HOSPITAL_ADMIN = async ( params ) => {
  const [obj, args, ctx] = [...params];
  return await ctx.find(args);
};

export default FIND_HOSPITAL_ADMIN;
