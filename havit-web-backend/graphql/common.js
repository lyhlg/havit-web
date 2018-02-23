import { FIND_HOSPITAL_ADMIN } from "./queries";

const USER_UPDATE = async (params) => {
  const [obj, args, { user }] = [...params];
  const email = args.user_id_email;
  delete args.user_id_email;
  console.log( "USER_UPDATE", args);
  return await user.update({ user_id_email: email }, { $set: args });
};

const CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE = (params) => {
  const [obj, args, { user, hospital, hospitalAdmin }] = [...params];

  // 병원 코드가 존재할 경우 User 테이블 업데이트 전 병원 테이블을 업데이트 한다.
  let userPreUpdate = async () => {

    if (args.hospitalCode) {
      let chkHospitalCode = async ({ hospitalCode }) => {
        console.log( '** chkHospitalCode');
        const isAdmin = await FIND_HOSPITAL_ADMIN([ obj, { code: hospitalCode }, hospitalAdmin]);
        // console.log('isAdmin', isAdmin);
        if (isAdmin.length) {
          REG_USER_TO_HOSPTIAL([obj, args, hospital]);
          async () => await USER_UPDATE([obj, args, user]);
        } else {
          // adminCode is not validated
        }
      };
      return await chkHospitalCode(args);
    } else {
      console.log("else code : ", args.hospitalCode);
      code = null;
      USER_UPDATE();
    }
  };

  return userPreUpdate();
}

// 병원테이블에 관리자 등록
const REG_USER_TO_HOSPTIAL = async (params) => {
  const [obj, { hospitalCode, user_id_email }, { hospital }] = [...params];
  const isRegHospital = async () => await hospital.find({code : hospitalCode});
  // if {
  //   // 있으면 update
  // } else {
  //   // 없으면 insert
  // }
  //   var a = await hospital.update(
  //   { code: hospitalCode },
  //   { $set: { code: hospitalCode, adminAccount: user_id_email } },
  //   { upsert: 1 }
  // );
  return await isRegHospital();
  console.log ( a);
};

const CHK_HOSPITAL = async (params) => {
  const [obj, { hospitalCode, user_id_email }, { hospital }] = [...params];
  return
}

export {
  USER_UPDATE,
  CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE,
  REG_USER_TO_HOSPTIAL
};
