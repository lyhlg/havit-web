const FIND_HOSPITALADMIN = async (params) => {
  const [obj, args, ctx] = [...params];
  return await ctx.hospitalAdmin.find(args);
};

export default FIND_HOSPITALADMIN;
