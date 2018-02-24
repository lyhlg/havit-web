import {
  CHK_DB_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE,
  CHK_DB_USER,
  ADD_DB_USER
} from "../../common";

const ADD_USER = async ( params ) => {
  const [obj, args, ctx] = [...params];
  // return (await CHK_DB_USER(params)) || ADD_DB_USER(params);
  const chk_user = await CHK_DB_USER(params);
  return chk_user || ADD_DB_USER(params);
}

const ADD_USER_INFO = async ( params ) => {
  const [obj, args, ctx] = [...params];
  return await CHK_DB_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE([obj, args, ctx]);
};

const EDIT_USER_INFO = async (params) => {
  const [obj, args, ctx] = [...params];
  return await CHK_DB_HOSPITAL_ADMIN_CODE_AND_UPDATE_TABLE([obj, args, ctx]);
}

export {
  ADD_USER,
  ADD_USER_INFO,
  EDIT_USER_INFO
};
