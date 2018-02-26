import * as types from './actionTypes';
import * as api from 'api';

const requestGetProducts = () => ({
  type: types.REQUEST_GET_PRODUCTS,
});

const successGetProducts = products => ({
  type: types.SUCCESS_GET_PRODUCTS,
  products,
});

export const getProducts = (type, subType, id) => {
  return dispatch => {
    dispatch(requestGetProducts());
    return api.getProducts(type, subType, id).then(res => {
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

export const getReservations = email => {
  return dispatch => {
    dispatch(requestGetReservations());
    return api.getReservations(email).then(res => {
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

export const getLikeProducts = email => {
  return dispatch => {
    dispatch(requestGetLikeProducts());
    return api.getLikeProducts(email).then(res => {
      dispatch(successGetLikeProducts(res));
    });
  };
};

const requestGetUserInfo = () => ({
  type: types.REQUEST_GET_USERINFO,
});

const successGetUserInfo = userInfo => ({
  type: types.SUCCESS_GET_USERINFO,
  userInfo,
});

export const getUserInfo = email => {
  return dispatch => {
    dispatch(requestGetUserInfo());
    return api.getUserInfo(email).then(res => {
      dispatch(successGetUserInfo(res));
    });
  };
};

const requestGetHospital = () => ({
  type: types.REQUEST_GET_HOSPITAL,
});

const successGetHospital = hospital => ({
  type: types.SUCCESS_GET_HOSPITAL,
  hospital,
});

export const getHospital = email => {
  return dispatch => {
    dispatch(requestGetHospital());
    return api.getHospital(email).then(res => {
      dispatch(successGetHospital(res));
    });
  };
};

const requestGetHospitalAdmin = () => ({
  type: types.REQUEST_GET_HOSPITALADMIN,
});

const successGetHospitalAdmin = hospitalAdmin => ({
  type: types.SUCCESS_GET_HOSPITALADMIN,
  hospitalAdmin,
});

export const getHospitalAdmin = () => {
  return dispatch => {
    dispatch(requestGetHospitalAdmin());
    return api.getHospitalAdmin().then(res => {
      dispatch(successGetHospitalAdmin(res));
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

export const addReservation = (
  email,
  hospitalCode,
  userName,
  phone,
  productName,
  reserveDate
) => {
  return dispatch => {
    dispatch(requestAddReservation());
    return api
      .addReservation(
        email,
        hospitalCode,
        userName,
        phone,
        productName,
        reserveDate
      )
      .then(res => {
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

export const addReview = (email, stars, comment, product) => {
  return dispatch => {
    dispatch(requestAddReview());
    return api.addReview(email, stars, comment, product).then(res => {
      dispatch(successAddReview(res));
    });
  };
};

const requestAddUserInfo = () => ({
  type: types.REQUEST_ADD_USERINFO,
});

const successAddUserInfo = newUserInfo => ({
  type: types.SUCCESS_ADD_USERINFO,
  newUserInfo,
});

export const addUserInfo = (
  email,
  name,
  phone,
  birthday,
  gender,
  likeArea,
  likePoint,
  code
) => {
  return dispatch => {
    dispatch(requestAddUserInfo());
    return api
      .addUserInfo(
        email,
        name,
        phone,
        birthday,
        gender,
        likeArea,
        likePoint,
        code
      )
      .then(res => {
        dispatch(successAddUserInfo(res));
      });
  };
};

const requestAddLikeProducts = () => ({
  type: types.REQUEST_ADD_LIKEPRODUCTS,
});

const successAddLikeProducts = newLikeProduct => ({
  type: types.SUCCESS_ADD_LIKEPRODUCTS,
  newLikeProduct,
});

export const addLikeProducts = (email, productId) => {
  return dispatch => {
    dispatch(requestAddLikeProducts());
    return api.addLikeProducts(email, productId).then(res => {
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

export const modifyReservation = (reserveNum, userName, phone, reserveDate) => {
  return dispatch => {
    dispatch(requestModifyReservation());
    return api
      .modifyReservation(reserveNum, userName, phone, reserveDate)
      .then(res => {
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

export const fixReservation = (reserveNum, careDate) => {
  return dispatch => {
    dispatch(requestFixReservation());
    return api.fixReservation(reserveNum, careDate).then(res => {
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

export const confirmPurchase = reserveNum => {
  return dispatch => {
    dispatch(requestConfirmPurchase());
    return api.confirmPurchase(reserveNum).then(res => {
      dispatch(successConfirmPurchase(res));
    });
  };
};

const requestAddUser = () => ({
  type: types.REQUEST_ADD_USER,
});

const successAddUser = newUser => ({
  type: types.SUCCESS_ADD_USER,
  newUser,
});

export const addUser = (email, specId, user) => {
  return dispatch => {
    dispatch(requestAddUser());
    return api.addUser(email, specId, user).then(res => {
      dispatch(successAddUser(res));
    });
  };
};
