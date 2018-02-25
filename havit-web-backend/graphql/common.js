const UPDATE_DB_USER = async (params) => {
  const [obj, args, user] = [...params];
  const email = args.user_id_email;
  delete args.user_id_email;
  return await user.update({ user_id_email: email }, { $set: args });
};

const UPDATE_DB_HOSPITAL = async (params) => {
  const [obj, args, hospital] = [...params];
  return await hospital.update({code: args.hospitalCode},
  {$set : {adminAccount: args.user_id_email}})
}

const INSERT_DB_HOSPITAL = async (params) => {
  const [obj, {hospitalCode, user_id_email }, hospital] = [...params];
  await new hospital({code: hospitalCode, adminAccount: user_id_email}).save();
  return await hospital.findOne({code: hospitalCode});
}

const CHK_HOSPITAL_ADMIN_CODE = async ( params ) => {
  const [obj, {hospitalCode, user_id_email }, hospitalAdmin] = [...params];
  return await hospitalAdmin.find({code: hospitalCode});
}

const CHK_DB_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE = async (params) => {
  const [obj, args, { user, hospital, hospitalAdmin }] = [...params];
  var email = args.user_id_email;
  if ( args.hospitalCode ){
    //병원 코드 존재시 유효한 병원코드 인지 확인
    const isVerifiedHospitalCode = await CHK_HOSPITAL_ADMIN_CODE([obj, args, hospitalAdmin]);
    if ( isVerifiedHospitalCode.length ){
      // 유효한 인증 번호이면, Hospital Table에 병원 추가 및 User 정보 업데이트
      await REG_USER_TO_HOSPTIAL([obj, args, hospital]);
      await UPDATE_DB_USER([obj, args, user]);
    } else {
      // 아닐 경우에는 잘못된 hospitalCode는 null로 변경하고 User 정보 업데이트
      args.hospitalCode = null;
      await UPDATE_DB_USER([obj, args, user]);
    }
  } else {
    // 병원 코드 존재 하지 않을 경우 hospitalCode는 null로 변경하고 User 정보 업데이트
    args.hospitalCode = null;
    await UPDATE_DB_USER([obj, args, user]);
  }
  // 업데이트된 유저 정보 리턴
  return await user.findOne({user_id_email: email});
}

// 병원테이블에 관리자 등록
const REG_USER_TO_HOSPTIAL = async (params) => {
  const [obj, { hospitalCode, user_id_email }, hospital] = [...params];
  const isRegHospital = await hospital.findOne({code : hospitalCode});
  return isRegHospital
    ? await UPDATE_DB_HOSPITAL([obj, { hospitalCode, user_id_email }, hospital])
    : await INSERT_DB_HOSPITAL([obj, { hospitalCode, user_id_email }, hospital])
};

const CHK_DB_HOSPITAL = async (params) => {
  const [obj, { hospitalCode, user_id_email }, hospital] = [...params];
  return await hospital.findOne({code:hospitalCode, adminAccount: user_id_email})
}

const CHK_DB_USER = async ( params ) => {
  console.log("CHK_DB_USER" );
  const[obj, { user_id_email }, { user }] = [...params];
  return await user.findOne({user_id_email: user_id_email})
}

const ADD_DB_USER = async ( params ) => {
  console.log("ADD_DB_USER");
  const [obj, args, { user }] = [...params];
  console.log( args);
  return await new user(args).save();
}

const CHECK_DUP_DATA = async (params) => {
  const [obj, args, ctx] = [...params];
  return await ctx.findOne(args);
};


export {
  UPDATE_DB_USER,
  UPDATE_DB_HOSPITAL,
  INSERT_DB_HOSPITAL,
  CHK_HOSPITAL_ADMIN_CODE,
  CHK_DB_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE,
  REG_USER_TO_HOSPTIAL,
  CHK_DB_HOSPITAL,
  CHK_DB_USER,
  ADD_DB_USER,
  CHECK_DUP_DATA
};
