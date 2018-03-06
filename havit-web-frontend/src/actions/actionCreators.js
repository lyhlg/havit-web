import * as types from './actionTypes';
import * as api from 'api';

const requestGetUserInfo = () => ({
  type: types.REQUEST_GET_USERINFO,
});

const successGetUserInfo = userInfo => ({
  type: types.SUCCESS_GET_USERINFO,
  userInfo,
});

export const getUserInfo = (email, password) => {
  return dispatch => {
    dispatch(requestGetUserInfo());
    return api.getUserInfo(email, password).then(res => {
      dispatch(successGetUserInfo(res));
    });
  };
};

const requestGetProducts = () => ({
  type: types.REQUEST_GET_PRODUCTS,
});

const successGetProducts = products => ({
  type: types.SUCCESS_GET_PRODUCTS,
  products,
});

export const getProducts = (type, subType, productId, page) => {
  return dispatch => {
    dispatch(requestGetProducts());
    return api.getProducts(type, subType, productId, page).then(res => {
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

export const getReservations = (email, status, page) => {
  return dispatch => {
    dispatch(requestGetReservations());
    return api.getReservations(email, status, page).then(res => {
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

export const getHospitalAdmin = page => {
  return dispatch => {
    dispatch(requestGetHospitalAdmin());
    return api.getHospitalAdmin(page).then(res => {
      dispatch(successGetHospitalAdmin(res));
    });
  };
};

const requestGetNotices = () => ({
  type: types.REQUEST_GET_NOTICES,
});

const successGetNotices = notices => ({
  type: types.SUCCESS_GET_NOTICES,
  notices,
});

export const getNotices = (id, page) => {
  return dispatch => {
    dispatch(requestGetNotices());
    return api.getNotices(id, page).then(res => {
      dispatch(successGetNotices(res));
    });
  };
};

const requestGetBanners = () => ({
  type: types.REQUEST_GET_BANNERS,
});

const successGetBanners = banners => ({
  type: types.SUCCESS_GET_BANNERS,
  banners,
});

export const getBanners = id => {
  return dispatch => {
    dispatch(requestGetBanners());
    return api.getBanners(id).then(res => {
      dispatch(successGetBanners(res));
    });
  };
};

const requestGetEvents = () => ({
  type: types.REQUEST_GET_EVENTS,
});

const successGetEvents = events => ({
  type: types.SUCCESS_GET_EVENTS,
  events,
});

export const getEvents = (email, productId, status, page) => {
  return dispatch => {
    dispatch(requestGetEvents());
    return api.getEvents(email, productId, status, page).then(res => {
      dispatch(successGetEvents(res));
    });
  };
};

const requestGetPayment = () => ({
  type: types.REQUEST_GET_PAYMENT,
});

const successGetPayment = payment => ({
  type: types.SUCCESS_GET_PAYMENT,
  payment,
});

export const getPayment = email => {
  return dispatch => {
    dispatch(requestGetPayment());
    return api.getPayment(email).then(res => {
      dispatch(successGetPayment(res));
    });
  };
};

// mutation

const requestAddProduct = () => ({
  type: types.REQUEST_ADD_PRODUCT,
});

const successAddProduct = product => ({
  type: types.SUCCESS_ADD_PRODUCT,
  product,
});

export const addProduct = (
  type,
  subType,
  img,
  email,
  productName,
  description,
  price,
  ProductDetail,
  options
) => {
  return dispatch => {
    dispatch(requestAddProduct());
    return api
      .addProduct(
        type,
        subType,
        img,
        email,
        productName,
        description,
        price,
        ProductDetail,
        options
      )
      .then(res => {
        dispatch(successAddProduct(res));
      });
  };
};

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
  productId,
  option,
  reserveDate,
  callback
) => {
  return dispatch => {
    dispatch(requestAddReservation());
    return api
      .addReservation(
        email,
        hospitalCode,
        userName,
        phone,
        productId,
        option,
        reserveDate,
        callback
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

export const addReview = (email, stars, comment, productId) => {
  return dispatch => {
    dispatch(requestAddReview());
    return api.addReview(email, stars, comment, productId).then(res => {
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
  callback,
  email,
  password,
  auth,
  name,
  phone,
  birthday,
  gender,
  likeAreas,
  likePoints,
  hospitalCode
) => {
  return dispatch => {
    dispatch(requestAddUserInfo());
    return api
      .addUserInfo(
        callback,
        email,
        password,
        auth,
        name,
        phone,
        birthday,
        gender,
        likeAreas,
        likePoints,
        hospitalCode
      )
      .then(res => {
        dispatch(successAddUserInfo(res));
      });
  };
};

// likeProduct

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

const requestDelLikeProducts = () => ({
  type: types.REQUEST_DEL_LIKEPRODUCTS,
});

const successDelLikeProducts = newLikeProduct => ({
  type: types.SUCCESS_DEL_LIKEPRODUCTS,
  newLikeProduct,
});

export const delLikeProducts = (email, productId, callback) => {
  return dispatch => {
    dispatch(requestDelLikeProducts());
    return api.delLikeProducts(email, productId, callback).then(res => {
      dispatch(successDelLikeProducts(res));
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

export const modifyReservation = (
  reserveNum,
  userName,
  phone,
  reserveDate,
  openPhoneNum
) => {
  return dispatch => {
    dispatch(requestModifyReservation());
    return api
      .modifyReservation(reserveNum, userName, phone, reserveDate, openPhoneNum)
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

const requestDelReservation = () => ({
  type: types.REQUEST_DEL_RESERVATION,
});

const successDelReservation = reservation => ({
  type: types.SUCCESS_DEL_RESERVATION,
  reservation,
});

export const delReservation = (email, productId, reserveNum) => {
  return dispatch => {
    dispatch(requestDelReservation());
    return api.delReservation(email, productId, reserveNum).then(res => {
      dispatch(successDelReservation(res));
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

const requestAddNotice = () => ({
  type: types.REQUEST_ADD_NOTICE,
});

const successAddNotice = notice => ({
  type: types.SUCCESS_ADD_NOTICE,
  notice,
});

export const addNotice = (title, body, author) => {
  return dispatch => {
    dispatch(requestAddNotice());
    return api.addNotice(title, body, author).then(res => {
      dispatch(successAddNotice(res));
    });
  };
};

const requestAddBanner = () => ({
  type: types.REQUEST_ADD_BANNER,
});

const successAddBanner = banner => ({
  type: types.SUCCESS_ADD_BANNER,
  banner,
});

export const addBanner = (img, title, url, priority) => {
  return dispatch => {
    dispatch(requestAddBanner());
    return api.addBanner(img, title, url, priority).then(res => {
      dispatch(successAddBanner(res));
    });
  };
};

const requestDelBanner = () => ({
  type: types.REQUEST_DEL_BANNER,
});

const successDelBanner = banner => ({
  type: types.SUCCESS_DEL_BANNER,
  banner,
});

export const delBanner = id => {
  return dispatch => {
    dispatch(requestDelBanner());
    return api.delBanner(id).then(res => {
      dispatch(successDelBanner(res));
    });
  };
};

const requestAddHospitalAdmin = () => ({
  type: types.REQUEST_ADD_HOSPITALADMIN,
});

const successAddHospitalAdmin = () => ({
  type: types.SUCCESS_ADD_HOSPITALADMIN,
  addHospitalAdmin,
});

export const addHospitalAdmin = (code, url, loc) => {
  return dispatch => {
    dispatch(requestAddHospitalAdmin());
    return api.addHospitalAdmin(code, url, loc).then(res => {
      dispatch(successAddHospitalAdmin(res));
    });
  };
};

const requestAddEvent = () => ({
  type: types.REQUEST_ADD_EVENT,
});

const successAddEvent = () => ({
  type: types.SUCCESS_ADD_EVENT,
  addEvent,
});

export const addEvent = (
  hospitalCode,
  productName,
  description,
  price,
  status,
  priority,
  productImage
) => {
  return dispatch => {
    dispatch(requestAddEvent());
    return api
      .addEvent(
        hospitalCode,
        productName,
        description,
        price,
        status,
        priority,
        productImage
      )
      .then(res => {
        dispatch(successAddEvent(res));
      });
  };
};

const requestDelEvent = () => ({
  type: types.REQUEST_DEL_EVENT,
});

const successDelEvent = () => ({
  type: types.SUCCESS_DEL_EVENT,
  addEvent,
});

export const delEvent = (hospitalCode, productId) => {
  return dispatch => {
    dispatch(requestDelEvent());
    return api.delEvent(hospitalCode, productId).then(res => {
      dispatch(successDelEvent(res));
    });
  };
};

const requestDelHospitalAdmin = () => ({
  type: types.REQUEST_DEL_HOSPITALADMIN,
});

const successDelHospitalAdmin = hospitalAdmin => ({
  type: types.SUCCESS_DEL_HOSPITALADMIN,
  hospitalAdmin,
});

export const delHospitalAdmin = code => {
  return dispatch => {
    dispatch(requestDelHospitalAdmin());
    return api.delHospitalAdmin(code).then(res => {
      dispatch(successDelHospitalAdmin(res));
    });
  };
};
