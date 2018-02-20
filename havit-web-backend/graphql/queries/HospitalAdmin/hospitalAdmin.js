const FIND_HOSPITAL_ADMIN = async ( params ) => {
  const [obj, args, ctx] = [...params];
  return await ctx.hospitalAdmin.find(args);
};

export default FIND_HOSPITAL_ADMIN;
