import { FIND_HOSPITAL_ADMIN } from "./queries";

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
  (async () => await new hospital({code: hospitalCode, adminAccount: user_id_email}).save())();
  // return await hospital.insert({code: hospitalCode, adminAccount: user_id_email});
  return await hospital.findOne({code: hospitalCode});
}

const CHK_HOSPITAL_CODE = async (params) => {
  const [obj, {hospitalCode, user_id_email }, hospitalAdmin] = [...params];
  return await hospitalAdmin.find({code: hospitalCode});
}

const CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE = async (params) => {
  const [obj, args, { user, hospital, hospitalAdmin }] = [...params];
  var email = args.user_id_email;
  if ( args.hospitalCode ){
    const isVerifiedHospitalCode = await CHK_HOSPITAL_CODE([obj, args, hospitalAdmin]);
    if ( isVerifiedHospitalCode.length ){
      await REG_USER_TO_HOSPTIAL([obj, args, hospital]);
      await UPDATE_DB_USER([obj, args, user]);
    } else {
      args.hospitalCode = null;
      await UPDATE_DB_USER([obj, args, user]);
    }
  } else {
    args.hospitalCode = null;
    await UPDATE_DB_USER([obj, args, user]);
  }
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
  return await new user(args).save();
}

export {
  UPDATE_DB_USER,
  UPDATE_DB_HOSPITAL,
  INSERT_DB_HOSPITAL,
  CHK_HOSPITAL_CODE,
  CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE,
  REG_USER_TO_HOSPTIAL,
  CHK_DB_HOSPITAL,
  CHK_DB_USER,
  ADD_DB_USER
};
