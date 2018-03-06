import * as types from 'actions/actionTypes';

const initialState = {
  newUserInfo: [],
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_ADD_USERINFO:
      return {
        ...state,
        newUserInfo: action.newUserInfo,
      };
    case types.REQUEST_ADD_USERINFO:
    default:
      return state;
  }
};

export default userInfo;
