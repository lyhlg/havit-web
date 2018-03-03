const FIND_EVENT = async params => {
  const [ obj, args, ctx ] = [...params];
  const { user_id_email, limit, page } = args;
  const { event, hospital } = ctx;
  let existCode = {}, code;

  if (Object.keys(args).length) {
    code = (await hospital.findOne({ adminAccount: user_id_email })).code;
    existCode = { hospitalCode: code };
  }
  if (!limit) args.limit = 12;
  if (!page) args.page = 1;

  return await event
    .find(existCode)
    .sort({ priority: 1 })
    .skip((page - 1) * args.limit)
    .limit(limit);

};

export { FIND_EVENT };
