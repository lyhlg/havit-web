const FIND_USER = async ( params ) => {
  const [ obj, args, ctx ] = [...params];
  return await ctx.user.find(args);
};

export {
  FIND_USER,
}
