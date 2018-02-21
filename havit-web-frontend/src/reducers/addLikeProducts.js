import * as types from 'actions/actionTypes';

const initialState = {
  addLikeProductsList: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_ADD_LIKEPRODUCTS:
      return {
        ...state,
        addLikeProductsList: action.likeProducts,
      };
    case types.REQUEST_ADD_LIKEPRODUCTS:
    default:
      return state;
  }
};

export default products;
