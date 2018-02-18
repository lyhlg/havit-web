import * as types from 'actions/actionTypes';

const initialState = {
  productsList: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_PRODUCTS_LIST:
      return Object.assign({}, state, {
        productsList: action.products.data.Products,
      });
    case types.REQUEST_PRODUCTS_LIST:
    default:
      return state;
  }
};

export default products;
