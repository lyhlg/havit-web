import * as types from 'actions/actionTypes';

const initialState = {
  maxPage: [],
};

const maxPage = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_MAXPAGE:
      return {
        ...state,
        maxPage: action.maxPage.data.MaxPages,
      };
    case types.REQUEST_GET_MAXPAGE:
    default:
      return state;
  }
};

export default maxPage;
