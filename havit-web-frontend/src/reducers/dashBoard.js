import * as types from 'actions/actionTypes';

const initialState = {
  dashBoard: [],
  loading: false,
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_DASHBOARD:
      return {
        ...state,
        dashBoard: action.dashBoard.data.SalesCount,
        loading: false,
      };
    case types.REQUEST_GET_DASHBOARD:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default events;
