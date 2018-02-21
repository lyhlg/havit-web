import * as types from 'actions/actionTypes';

const initialState = {
  reservationsList: [],
};

const reservations = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_RESERVATIONS:
      return {
        ...state,
        reservationsList: action.reservations.data.Reservations,
      };
    case types.REQUEST_GET_RESERVATIONS:
    default:
      return state;
  }
};

export default reservations;
