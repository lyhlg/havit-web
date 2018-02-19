import * as types from './actionTypes';
import * as api from 'api';

const requestProductsList = () => ({
  type: types.REQUEST_PRODUCTS_LIST,
});

const successProductsList = products => ({
  type: types.SUCCESS_PRODUCTS_LIST,
  products,
});

export const getProductsList = () => {
  return dispatch => {
    dispatch(requestProductsList());
    return api.getProducts().then(res => {
      dispatch(successProductsList(res));
    });
  };
};

const requestReservationsList = () => ({
  type: types.REQUEST_RESERVATIONS_LIST,
});

const successReservationsList = reservations => ({
  type: types.SUCCESS_RESERVATIONS_LIST,
  reservations,
});

export const getReservationsList = () => {
  return dispatch => {
    dispatch(requestReservationsList());
    return api.getReservations().then(res => {
      dispatch(successReservationsList(res));
    });
  };
};

const requestLikeProductsList = () => ({
  type: types.REQUEST_LIKEPRODUCTS_LIST,
});

const successLikeProductsList = products => ({
  type: types.SUCCESS_LIKEPRODUCTS_LIST,
  products,
});

export const likeProductsList = () => {
  return dispatch => {
    dispatch(requestLikeProductsList());
    return api.getLikeProducts().then(res => {
      dispatch(successLikeProductsList(res));
    });
  };
};

const requestEditInfo = () => ({
  type: types.REQUEST_EDIT_INFO,
});

const successEditInfo = info => ({
  type: types.SUCCESS_EDIT_INFO,
  info,
});

export const userInfo = () => {
  return dispatch => {
    dispatch(requestEditInfo());
    return api.getUserInfo().then(res => {
      dispatch(successEditInfo(res));
    });
  };
};
