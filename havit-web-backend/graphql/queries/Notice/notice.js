const FIND_NOTICE = async (params) => {
  const [obj, args, { notice }] = [...params];
  return await notice.find(args);
};

export default FIND_NOTICE;
