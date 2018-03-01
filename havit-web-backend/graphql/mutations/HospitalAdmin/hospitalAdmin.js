const ADD_HOSPITAL_ADMIN = async (params) => {
  const [obj, args, ctx] = [...params];
  const { hospitalAdmin } = ctx;

  return await hospitalAdmin.findOne(args).then ( async res => {
    if (res) {
      return await hospitalAdmin.findOne(args);
    }
    await new hospitalAdmin(args).save();
    return await hospitalAdmin.findOne(args);
  })
}

const DEL_HOSPITAL_ADMIN = async (params) => {
  const [obj, args, { hospitalAdmin }] = [...params];
  return await hospitalAdmin.findOne(args).then ( async res => {
    if (res) {
      await hospitalAdmin.remove(args);
      return res;
    }
  })
}

export {
  ADD_HOSPITAL_ADMIN,
  DEL_HOSPITAL_ADMIN
};
