import * as types from 'actions/actionTypes';

const initialState = {
  hospital: [],
  loading: false,
};

const hospital = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_HOSPITAL:
      return {
        ...state,
        loading: false,
        hospital: action.hospital.data.Hospitals[0].reservations,
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
