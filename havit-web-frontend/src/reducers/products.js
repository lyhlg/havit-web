import * as types from 'actions/actionTypes';

const initialState = {
  productsList: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_PRODUCTS:
      return {
        ...state,
        productsList: action.products.data.Products,
      };
    case types.REQUEST_GET_PRODUCTS:
    default:
      return state;
  }
};

export default products;
