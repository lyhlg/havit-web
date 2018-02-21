import * as types from './actionTypes';
import * as api from 'api';

const requestGetProducts = () => ({
  type: types.REQUEST_GET_PRODUCTS,
});

const successGetProducts = products => ({
  type: types.SUCCESS_GET_PRODUCTS,
  products,
});

export const getProducts = (type, subType) => {
  return dispatch => {
    dispatch(requestGetProducts());
    return api.getProducts(type, subType).then(res => {
      dispatch(successGetProducts(res));
    });
  };
};

const requestGetReservations = () => ({
  type: types.REQUEST_GET_RESERVATIONS,
});

const successGetReservations = reservations => ({
  type: types.SUCCESS_GET_RESERVATIONS,
  reservations,
});

export const getReservations = () => {
  return dispatch => {
    dispatch(requestGetReservations());
    return api.getReservations().then(res => {
      dispatch(successGetReservations(res));
    });
  };
};

const requestGetLikeProducts = () => ({
  type: types.REQUEST_GET_LIKEPRODUCTS,
});

const successGetLikeProducts = likeProducts => ({
  type: types.SUCCESS_GET_LIKEPRODUCTS,
  likeProducts,
});

export const getLikeProducts = () => {
  return dispatch => {
    dispatch(requestGetLikeProducts());
    return api.getLikeProducts().then(res => {
      dispatch(successGetLikeProducts(res));
    });
  };
};

const requestGetUserInfo = () => ({
  type: types.REQUEST_GET_USERINFO,
});

const successGetUserInfo = info => ({
  type: types.SUCCESS_GET_USERINFO,
  info,
});

export const getUserInfo = () => {
  return dispatch => {
    dispatch(requestGetUserInfo());
    return api.getUserInfo().then(res => {
      dispatch(successGetUserInfo(res));
    });
  };
};

// mutation

const requestAddReservation = () => ({
  type: types.REQUEST_ADD_RESERVATION,
});

const successAddReservation = reservation => ({
  type: types.SUCCESS_ADD_RESERVATION,
  reservation,
});

export const addReservation = () => {
  return dispatch => {
    dispatch(requestAddReservation());
    return api.addReservation().then(res => {
      dispatch(successAddReservation(res));
    });
  };
};

const requestAddReview = () => ({
  type: types.REQUEST_ADD_REVIEW,
});

const successAddReview = review => ({
  type: types.SUCCESS_ADD_REVIEW,
  review,
});

export const addReview = () => {
  return dispatch => {
    dispatch(requestAddReview());
    return api.addReview().then(res => {
      dispatch(successAddReview(res));
    });
  };
};

const requestAddUserInfo = () => ({
  type: types.REQUEST_ADD_USERINFO,
});

const successAddUserInfo = UserInfo => ({
  type: types.SUCCESS_ADD_USERINFO,
  UserInfo,
});

export const addUserInfo = () => {
  return dispatch => {
    dispatch(requestAddUserInfo());
    return api.addUserInfo().then(res => {
      dispatch(successAddUserInfo(res));
    });
  };
};

const requestAddLikeProducts = () => ({
  type: types.REQUEST_ADD_LIKEPRODUCTS,
});

const successAddLikeProducts = likeProducts => ({
  type: types.SUCCESS_ADD_LIKEPRODUCTS,
  likeProducts,
});

export const addLikeProducts = () => {
  return dispatch => {
    dispatch(requestAddLikeProducts());
    return api.addLikeProducts().then(res => {
      dispatch(successAddLikeProducts(res));
    });
  };
};

const requestModifyReservation = () => ({
  type: types.REQUEST_MODIFY_RESERVATION,
});

const successModifyReservation = reservation => ({
  type: types.SUCCESS_MODIFY_RESERVATION,
  reservation,
});

export const modifyReservation = () => {
  return dispatch => {
    dispatch(requestModifyReservation());
    return api.modifyReservation().then(res => {
      dispatch(successModifyReservation(res));
    });
  };
};

const requestFixReservation = () => ({
  type: types.REQUEST_FIX_RESERVATION,
});

const successFixReservation = reservation => ({
  type: types.SUCCESS_FIX_RESERVATION,
  reservation,
});

export const fixReservation = () => {
  return dispatch => {
    dispatch(requestFixReservation());
    return api.fixReservation().then(res => {
      dispatch(successFixReservation(res));
    });
  };
};

const requestConfirmPurchase = () => ({
  type: types.REQUEST_CONFIRM_PURCHASE,
});

const successConfirmPurchase = reservation => ({
  type: types.SUCCESS_CONFIRM_PURCHASE,
  reservation,
});

export const confirmPurchase = () => {
  return dispatch => {
    dispatch(requestConfirmPurchase());
    return api.confirmPurchase().then(res => {
      dispatch(successConfirmPurchase(res));
    });
  };
};
