import * as types from 'actions/actionTypes';

const initialState = {
  likeProductsList: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_LIKEPRODUCTS:
      return {
        ...state,
        likeProductsList: action.likeProducts.data.LikeProducts,
      };
    case types.REQUEST_GET_LIKEPRODUCTS:
    default:
      return state;
  }
};

export default products;
