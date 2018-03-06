import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  noticesList: [],
};

const notices = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_NOTICES:
      return {
        ...state,
        loading: false,
        noticesList: action.notices.data.Notices,
      };
    case types.REQUEST_GET_NOTICES:
      return {
        ...state,
        noticesList: [],
        loading: true,
      };
    default:
      return state;
  }
};

export default notices;
