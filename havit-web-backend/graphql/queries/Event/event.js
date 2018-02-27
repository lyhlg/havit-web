const FIND_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode, limit, page } = args;
  const { event } = ctx;

  if (!limit) args.limit = 12;
  if (!page) args.page = 1;

  if (hospitalCode) {
    var a = await event.find({ hospitalCode: hospitalCode });
    console.log(a);
    return a;
  }
  else if (!hospitalCode) {
    var a = await event.find();
    console.log(a);
    return a;
  }
};

export { FIND_EVENT };
