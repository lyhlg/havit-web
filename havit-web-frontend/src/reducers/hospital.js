import * as types from 'actions/actionTypes';

const initialState = {
  hospital: [],
};

const hospital = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_HOSPITAL:
      return {
        ...state,
        hospital: action.hospital.data.Hospitals[0].reservations,
      };
    case types.REQUEST_GET_HOSPITAL:
    default:
      return state;
  }
};

export default hospital;
