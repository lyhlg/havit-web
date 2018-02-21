import * as types from 'actions/actionTypes';

const initialState = {
  userInfo: [],
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo.data.Users,
      };
    case types.REQUEST_GET_USERINFO:
    default:
      return state;
  }
};

export default userInfo;
