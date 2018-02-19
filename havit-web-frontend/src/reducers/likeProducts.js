import * as types from 'actions/actionTypes';

const initialState = {
  likeProductsList: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_PRODUCTS_LIST:
      return {
        ...state,
        likeProductsList: action.likeProducts,
      };
    case types.REQUEST_PRODUCTS_LIST:
    default:
      return state;
  }
};

export default products;
