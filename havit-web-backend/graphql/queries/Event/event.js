const FIND_EVENT = async params => {
  const [obj, args, ctx] = [...params];
  const { hospitalCode, limit, page } = args;
  const { event } = ctx;

  if (!limit) args.limit = 12;
  if (!page) args.page = 1;

  if (hospitalCode) {
    return await event.find({ hospitalCode: hospitalCode });
  } else {
    return await event
      .find()
      .sort({ priority: 1 })
      .skip((page - 1) * args.limit)
      .limit(limit);
  }
  // 만약 Hospital이 event를 확인하고 싶으면 obj에 대한 내용 추가 필요
};

export { FIND_EVENT };
