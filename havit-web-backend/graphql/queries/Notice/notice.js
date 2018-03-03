const FIND_NOTICE = async params => {
  const [obj, args, ctx] = [...params];
  const { id } = args;
  const { notice } = ctx;
  const arg = { _id: id };
  return id
    ? await notice.find(arg).sort({ _id: -1 })
    : await notice.find().sort({ _id: -1 });
};

export default FIND_NOTICE;
