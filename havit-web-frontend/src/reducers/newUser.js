import * as types from 'actions/actionTypes';

const initialState = {
  newUser: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_ADD_USER:
      return {
        ...state,
        newUser: action.newUser.data.addUser,
      };
    case types.REQUEST_ADD_USER:
    default:
      return state;
  }
};

export default user;
