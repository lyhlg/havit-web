import * as types from 'actions/actionTypes';

const initialState = {
  reservationsList: [],
};

const reservations = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_RESERVATIONS_LIST:
      return Object.assign({}, state, {
        reservationsList: action.reservations,
      });
    case types.REQUEST_RESERVATIONS_LIST:
    default:
      return state;
  }
};

export default reservations;
