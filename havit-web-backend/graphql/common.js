import { FIND_HOSPITAL_ADMIN } from "./queries";

const USER_UPDATE = async (obj, args, {user}) => {
  const email = args.user_id_email;
  delete args.user_id_email;
    return await user.update({ user_id_email: email }, { $set: args });
};

const CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE = async (obj, args, ctx) => {
  console.log(ctx);

  // 병원 코드가 존재할 경우 User 테이블 업데이트 전 병원 테이블을 업데이트 한다.
  let userPreUpdate = async () => {
    if (args.code) {
      let chkHospitalCode = async ({ code }) => {
        const isAdmin = await FIND_HOSPITAL_ADMIN([ obj, { code: args.code }, ctx.hospitalAdmin]);
        if (isAdmin.length) {
          regUserToHospital(obj, args, ctx);
          USER_UPDATE(obj, args, ctx.yuser);
        }
      };
      chkHospitalCode(args);
    } else {
      code = null;
      userUpdate();
    }
  };
  return await userPreUpdate();
}

// 병원테이블에 관리자 등록
const regUserToHospital = async (obj, {code, user_id_email}, { hospital }) => {
  return await hospital.update(
    { code: code },
    { $set: { code: code, adminAccount: user_id_email } },
    { upsert: 1 }
  );
};


export {
  CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE
}
