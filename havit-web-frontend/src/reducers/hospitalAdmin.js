import * as types from 'actions/actionTypes';

const initialState = {
  hospitalAdminList: [],
};

const hospitalAdmin = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_HOSPITALADMIN:
      return {
        ...state,
        hospitalAdminList: action.hospitalAdmin.data.HospitalAdmin,
      };
    case types.REQUEST_GET_HOSPITALADMIN:
    default:
      return state;
  }
};

export default hospitalAdmin;
