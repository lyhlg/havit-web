const FIND_EVENT = async params => {
  const [ obj, args, ctx ] = [...params];
  const { hospitalCode, limit, page } = args;
  const { event } = ctx;

  if (!limit) args.limit = 12;
  if (!page) args.page = 1;

  if (hospitalCode) {
    return await event.find({ hospitalCode: hospitalCode });
  }
  else if (!hospitalCode) {
    return await event.find();
  }
};

export { FIND_EVENT };
