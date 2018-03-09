import * as types from 'actions/actionTypes';

const initialState = {
  dashBoard: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_DASHBOARD:
      return {
        ...state,
        dashBoard: action.dashBoard.data.SalesCount,
      };
    case types.REQUEST_GET_DASHBOARD:
    default:
      return state;
  }
};

export default events;
