const UPDATE_DB_USER = async (params,level) => {
  const [obj, args, user] = [...params];
  const email = args.user_id_email;
  // 관리자 계정
  if ( args.user_id_email === "havitmailer@gmail.com" ){
    console.log("해당 계정은 관리자 등록합니다.");
    level = 1;
  }
  const memberLevel = {level: level};
  const new_args = Object.assign(args, memberLevel);
  console.log(new_args)
  delete args.user_id_email;
  return await user.update({ user_id_email: email }, { $set: new_args }, {upsert:1});
};

const UPDATE_DB_HOSPITAL = async (params) => {
  const [obj, { hospitalCode, user_id_email }, { hospital, hospitalAdmin }] = [...params];
  await UPDATE_DB_HOSPITAL_ADMIN_ACCOUNT([obj, { hospitalCode, user_id_email }, hospitalAdmin]);
  return await hospital.update({code: hospitalCode},
  {$set : { adminAccount: user_id_email }})
}

const INSERT_DB_HOSPITAL = async (params) => {
  const [obj, {hospitalCode, user_id_email }, { hospital,hospitalAdmin }] = [...params];
  await new hospital({code: hospitalCode, adminAccount: user_id_email}).save();
  await UPDATE_DB_HOSPITAL_ADMIN_ACCOUNT([obj, { hospitalCode, user_id_email }, hospitalAdmin]);
  return await hospital.findOne({code: hospitalCode});
}

const UPDATE_DB_HOSPITAL_ADMIN_ACCOUNT = async ( params ) => {
  const [obj, { hospitalCode, user_id_email }, hospitalAdmin] = [...params];
  console.log( hospitalCode, user_id_email);
  return await hospitalAdmin.update(
    {code: hospitalCode},
    {$set: { adminAccount: user_id_email}})
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
      await REG_USER_TO_HOSPTIAL([obj, args, { hospital, hospitalAdmin }]);
      await UPDATE_DB_USER([obj, args, user],3);
    } else {
      // 아닐 경우에는 잘못된 hospitalCode는 null로 변경하고 User 정보 업데이트
      args.hospitalCode = null;
      await UPDATE_DB_USER([obj, args, user],2);
    }
  } else {
    // 병원 코드 존재 하지 않을 경우 hospitalCode는 null로 변경하고 User 정보 업데이트
    args.hospitalCode = null;
    await UPDATE_DB_USER([obj, args, user],3);
  }
  // 업데이트된 유저 정보 리턴
  return await user.findOne({user_id_email: email});
}

// 병원테이블에 관리자 등록
const REG_USER_TO_HOSPTIAL = async (params) => {
  const [obj, { hospitalCode, user_id_email }, { hospital, hospitalAdmin }] = [...params];
  const isRegHospital = await hospital.findOne({code : hospitalCode});
  return await isRegHospital
    ? await UPDATE_DB_HOSPITAL([obj, { hospitalCode, user_id_email },
      { hospital, hospitalAdmin }])
    : await INSERT_DB_HOSPITAL([obj, { hospitalCode, user_id_email },
      { hospital, hospitalAdmin }])
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
  const [obj, args, db] = [...params];
  return await db.findOne(args);
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
