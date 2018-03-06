import * as types from 'actions/actionTypes';

const initialState = {
  eventsList: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_EVENTS:
      return {
        ...state,
        eventsList: action.events.data.Events,
      };
    case types.REQUEST_GET_EVENTS:
    case types.REQUEST_DEL_EVENT:
    case types.SUCCESS_DEL_EVENT:
    default:
      return state;
  }
};

export default events;
