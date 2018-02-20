const FIND_HOSPITAL = async (params) => {
  const [obj, args, ctx] = [...params];
  return await ctx.hospital.find(args);
};

export default FIND_HOSPITAL;
