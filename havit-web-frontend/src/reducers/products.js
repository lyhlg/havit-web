import * as types from 'actions/actionTypes';

const initialState = {
  productsList: [],
  keyword: [],
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
    case types.SUCCESS_GET_SEARCH:
      return {
        ...state,
        productsList: action.search.data.Search,
        keyword: action.keyword,
        loading: false,
      };
    case types.REQUEST_GET_SEARCH:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_ADD_PRODUCT:
    case types.SUCCESS_ADD_PRODUCT:
    case types.REQUEST_EDIT_PRODUCT:
    case types.SUCCESS_EDIT_PRODUCT:
    case types.REQUEST_DEL_PRODUCT:
    case types.SUCCESS_DEL_PRODUCT:
    default:
      return state;
  }
};

export default products;
