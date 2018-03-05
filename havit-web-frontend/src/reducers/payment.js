import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  paymentList: [],
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_PAYMENT:
      return {
        ...state,
        loading: false,
        paymentList: action.payment.data.Payments,
      };
    case types.REQUEST_GET_PAYMENT:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default payment;
