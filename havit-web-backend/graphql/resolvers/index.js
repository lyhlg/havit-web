import { reserveNumCal } from '../../utils';
import {
  FIND_USER,
  FIND_RESERVATION,
  FIND_PRODUCT,
  LIKE_PRODUCT,
  GET_PRODUCT_RESERVATION,
  GET_REVIEW_LIST_OF_PRODUCT,
  FIND_REVIEW,
  FIND_NOTICE,
  FIND_HOSPITAL,
  GET_HOSPITAL_RESERVATION_INFO,
  GET_HOSPITAL_PRODUCT_LIST,
  FIND_HOSPITAL_ADMIN,
  GET_BANNER_LIST,
  GET_BANNER_FROM_PRODUCT,
  GET_DASHBOARD_COUNT,
} from "../queries";


import {
  ADD_RESERVATION,
  MODIFY_RESERVATION,
  DEL_RESERVATION,
  FIX_RESERVATION,
  CONFIRM_PURCHASE,
  ADD_REVIEW,
  ADD_USER_INFO,
  ADD_LIKE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  EDIT_USER_INFO,
  ADD_USER,
  ADD_HOSPITAL_ADMIN,
  DEL_HOSPITAL_ADMIN,
  ADD_NOTICE,
  DEL_NOTICE,
  ADD_BANNER,
  DEL_BANNER
} from "../mutations";


export default {
  // QUERY (GET DATA)
  Query: {
    Users: (...params) => FIND_USER(params),
    Reservations: (...params) => FIND_RESERVATION(params),
    LikeProducts: (...params) => LIKE_PRODUCT(params),
    Products: (...params) => FIND_PRODUCT(params),
    Reviews: (...params) => FIND_REVIEW(params),
    Notices: (...params) => FIND_NOTICE(params),
    Hospitals: (...params) => FIND_HOSPITAL(params),
    HospitalAdmin: (...params) => FIND_HOSPITAL_ADMIN(params),
    Banners: (...params) => GET_BANNER_LIST(params),
    getDashboardCount: (...params) => GET_DASHBOARD_COUNT(params)
  },
  Reservation: {
    product: (...params) => GET_PRODUCT_RESERVATION(params)
  },
  Banner: {
    product: (...params) => GET_BANNER_FROM_PRODUCT(params)
  },
  Hospital: {
    reservations: (...params) => GET_HOSPITAL_RESERVATION_INFO(params),
    products: (...params) => GET_HOSPITAL_PRODUCT_LIST(params)
  },
  Product: {
    reviews: (...params) => GET_REVIEW_LIST_OF_PRODUCT(params)
  },
  User: {
    reservation: (...params) => FIND_RESERVATION(params),
    likeProduct: (...params) => LIKE_PRODUCT(params),
    reviews: (...params) => FIND_REVIEW(params)
  },
  Review: {
    product: (...params) => FIND_PRODUCT(params)
  },

  // MUTATION (STORE DATA)
  Mutation: {
    addProduct: (...params) => ADD_PRODUCT(params),
    editProduct: (...params) => EDIT_PRODUCT(params),
    addLikeProducts: (...params) => ADD_LIKE_PRODUCT(params),
    addReservation: (...params) => ADD_RESERVATION(params, reserveNumCal),
    modifyReservation: (...params) => MODIFY_RESERVATION(params),
    delReservation: (...params) => DEL_RESERVATION(params),
    fixReservation: (...params) => FIX_RESERVATION(params),
    addReview: (...params) => ADD_REVIEW(params),
    addUserInfo: (...params) => ADD_USER_INFO(params),
    confirmPurchase: (...params) => CONFIRM_PURCHASE(params),
    editUserInfo: (...params) => EDIT_USER_INFO(params),
    addUser: (...params) => ADD_USER(params),
    addHospitalAdmin: (...params) => ADD_HOSPITAL_ADMIN(params),
    delHospitalAdmin: (...params) => DEL_HOSPITAL_ADMIN(params),
    addNotice: (...params) => ADD_NOTICE(params),
    delNotice: (...params) => DEL_NOTICE(params),
    addBanner: (...params) => ADD_BANNER(params),
    delBanner: (...params) => DEL_BANNER(params)
  }
};
