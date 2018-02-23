const ObjectId = require('mongodb').ObjectID;
import { FIND_HOSPITAL_ADMIN } from '../../queries';
import { CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE } from '../../common'

const ADD_USER_INFO = async ( params ) => {
  const [obj, args, {user, hospitalAdmin}] = [...params];

  // 병원 코드 확인
  let code = args.code;

  // arguments로 넘어온 데이터를 user 테이블에 업데이트
  // 만약 인증된 병원 code일 경우 code를 포함하여 update
  let userUpdate = async () => {
    await user.update(
      { user_id_email: args.user_id_email },
      {
        $set: {
          name: args.name,
          phone: args.phone,
          birthday: args.birthday,
          gender: args.gender,
          hospitalCode: args.code,
          likeArea: args.likeArea,
          likePoint: args.likePoint,
        }
      }
    )
  }
  // 병원 코드가 존재할 경우 User 테이블 업데이트 전 병원 테이블을 업데이트 한다.
  let userPreUpdate = async () => {
    if (args.code) {
      let chkHospitalCode = async ({ code }) => {
        const isAdmin = await FIND_HOSPITAL_ADMIN([obj, { code: args.code }, hospitalAdmin]);
        if (isAdmin.length){
          let regUserToHospital = async ({ code, user_id_email }) => {
            return await hospital.update(
              { code: code },
              { $set: { code: code, adminAccount: user_id_email } },
              { upsert: 1 })
          }
          regUserToHospital(args);
          userUpdate();
        }
      }
      chkHospitalCode(args);
    } else {
      code = null;
      userUpdate();
    }
  }
  userPreUpdate();
  return await user.findOne({ user_id_email: args.user_id_email });
};

const EDIT_USER_INFO = async (params) => {
  const [obj, args, {user,hospial}] = [...params];
  const email = args.user_id_email;
  if ( !args.hospitalCode ) args.hospitalCode = null;
  else {
    // const isAdmin = await FIND_HOSPITAL_ADMIN([obj, { code: args.hospitalCode }, user]);

      CHK_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE([obj, { code: args.hospitalCode }, {user,hospital, hospitalAdmin}])
      // const user_update = async () => {
      //   return await user.update(
      //   { user_id_email: email },
      //     { $set: args }
      // )}
      user_update();
      return await user.findOne({ user_id_email: email });
    // }
  }

}

export {
  ADD_USER_INFO,
  EDIT_USER_INFO
};
