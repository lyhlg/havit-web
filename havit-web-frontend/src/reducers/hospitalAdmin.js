import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  hospitalAdminList: [],
};

const hospitalAdmin = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_HOSPITALADMIN:
      return {
        ...state,
        loading: false,
        hospitalAdminList: action.hospitalAdmin.data.HospitalAdmin,
      };
    case types.REQUEST_GET_HOSPITALADMIN:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default hospitalAdmin;
