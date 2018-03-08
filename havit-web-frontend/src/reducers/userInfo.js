import * as types from 'actions/actionTypes';

const initialState = {
  userInfo: [],
  loading: false,
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo.data.Users,
        loading: false,
      };
    case types.REQUEST_GET_USERINFO:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userInfo;
