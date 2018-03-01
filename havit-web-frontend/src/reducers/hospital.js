import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  hospitalProducts: [],
  hospitalReservations: [],
};

const hospital = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_HOSPITAL:
      return {
        ...state,
        loading: false,
        hospitalProducts:
          action.hospital.data.Hospitals[0] &&
          action.hospital.data.Hospitals[0].products,
        hospitalReservations:
          action.hospital.data.Hospitals[0] &&
          action.hospital.data.Hospitals[0].reservations,
      };
    case types.REQUEST_GET_HOSPITAL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default hospital;
