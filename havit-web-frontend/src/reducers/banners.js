import * as types from 'actions/actionTypes';

const initialState = {
  bannersList: [],
};

const banners = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_BANNERS:
      return {
        ...state,
        bannersList: action.banners.data.Banners,
      };
    case types.REQUEST_GET_BANNERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default banners;
