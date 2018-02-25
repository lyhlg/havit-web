const FIND_NOTICE = async (params) => {
  const [obj, { id }, { notice }] = [...params];
  const arg = { _id: id };
  return id ? await notice.find(arg) : await notice.find();
};

export default FIND_NOTICE;
