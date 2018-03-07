import * as types from 'actions/actionTypes';

const initialState = {
  login: [],
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case types.REQUEST_GET_LOGIN:
    default:
      return state;
  }
};

export default login;
