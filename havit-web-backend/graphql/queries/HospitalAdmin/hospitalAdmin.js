const FIND_HOSPITAL_ADMIN = async params => {
  const [obj, args, ctx] = [...params];
  const { page } = args;
  const { hospitalAdmin } = ctx;
  const limit = 20;

  page ? page : 1

  return await hospitalAdmin
    .find()
    .sort({ code: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
};

export default FIND_HOSPITAL_ADMIN;
