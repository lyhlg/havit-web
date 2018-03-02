import * as types from 'actions/actionTypes';

const initialState = {
  productsList: [],
  loading: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_PRODUCTS:
      return {
        ...state,
        productsList: action.products.data.Products,
        loading: false,
      };
    case types.REQUEST_GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default products;
