const FIND_NOTICE = async params => {
  const [obj, args, ctx] = [...params];
  const { id, page } = args;
  const { notice } = ctx;
  const limit = 12;
  const arg = { _id: id };
  // page 설정
  page ? page : 1;
  const result = async target => {
    return await notice
      .find(target)
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  };
  return id ? await result(arg) : await result({});
};

export default FIND_NOTICE;
