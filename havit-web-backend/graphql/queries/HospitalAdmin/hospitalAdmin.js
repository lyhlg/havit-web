const FIND_HOSPITAL_ADMIN = async params => {
  const [obj, args, ctx] = [...params];
  const { code } = args;
  const { hospitalAdmin } = ctx;
  let viewPage = 0
  if (args.page) viewPage = (args.page - 1) * 12;

  return await hospitalAdmin.find().sort({ code: -1 }).skip(viewPage).limit(12);
};

export default FIND_HOSPITAL_ADMIN;
