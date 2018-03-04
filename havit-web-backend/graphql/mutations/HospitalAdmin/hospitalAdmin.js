const ADD_HOSPITAL_ADMIN = async (params) => {
  const [obj, args, ctx] = [...params];
  const { code, name, loc } = args;
  const { hospitalAdmin } = ctx;

  return await hospitalAdmin.findOne({code}).then ( async res => {
    if (res) {
      return await hospitalAdmin.findOne({code});
    }
    await new hospitalAdmin(args).save();
    return await hospitalAdmin.findOne(args);
  })
}

const DEL_HOSPITAL_ADMIN = async (params) => {
  const [obj, args, ctx] = [...params];
  const { code } = args;
  const { hospitalAdmin } = ctx;
  return await hospitalAdmin.findOne({code}).then ( async res => {
    if (res) {
      await hospitalAdmin.remove({code});
      return res;
    }
  })
}

export {
  ADD_HOSPITAL_ADMIN,
  DEL_HOSPITAL_ADMIN
};
