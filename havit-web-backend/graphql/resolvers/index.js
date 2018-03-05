import { reserveNumCal } from "../../utils";

import {
  FIND_USER,
  FIND_RESERVATION,
  FIND_PRODUCT,
  LIKE_PRODUCT,
  GET_OPENED_NUMBER,
  FIND_EVENT,
  GET_PRODUCT_RESERVATION,
  GET_REVIEW_LIST_OF_PRODUCT,
  FIND_REVIEW,
  FIND_NOTICE,
  FIND_HOSPITAL,
  GET_PAYMENT,
  GET_HOSPITAL_PRODUCT_LIST,
  FIND_HOSPITAL_ADMIN,
  GET_BANNER_LIST,
  GET_BANNER_FROM_PRODUCT,
  GET_DASHBOARD_COUNT,
  FIND_OPTION,
  MAX_PAGE
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
  DEL_LIKE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  EDIT_USER_INFO,
  ADD_HOSPITAL_ADMIN,
  DEL_HOSPITAL_ADMIN,
  ADD_NOTICE,
  DEL_NOTICE,
  ADD_BANNER,
  MODIFY_BANNER,
  DEL_BANNER,
  ADD_EVENT,
  DEL_EVENT
} from "../mutations";

export default {
  // QUERY (GET DATA)
  Query: {
    Users: (...params) => FIND_USER(params),
    Products: (...params) => FIND_PRODUCT(params),
    Reservations: (...params) => FIND_RESERVATION(params),
    Hospitals: (...params) => FIND_HOSPITAL(params),
    HospitalAdmin: (...params) => FIND_HOSPITAL_ADMIN(params),
    Events: (...params) => FIND_EVENT(params),
    Notices: (...params) => FIND_NOTICE(params),
    Banners: (...params) => GET_BANNER_LIST(params),
    Dashboard: (...params) => GET_DASHBOARD_COUNT(params),
    Payments: (...params) => GET_PAYMENT(params),
    LikeProducts: (...params) => LIKE_PRODUCT(params),
    OpenedNumbers: (...params) => GET_OPENED_NUMBER(params),
    Reviews: (...params) => FIND_REVIEW(params),
    MaxPages: (...params) => MAX_PAGE(params)
  },
  User: {
    reservations: (...params) => FIND_RESERVATION(params),
    likeProducts: (...params) => LIKE_PRODUCT(params),
    reviews: (...params) => FIND_REVIEW(params)
  },
  Product: {
    reviews: (...params) => FIND_REVIEW(params),
    options: (...params) => FIND_OPTION(params)
  },
  Reservation: {
    product: (...params) => FIND_PRODUCT(params)
  },
  Hospital: {
    reservations: (...params) => FIND_RESERVATION(params),
    products: (...params) => FIND_PRODUCT(params)
  },
  Event: {
    reviews: (...params) => FIND_REVIEW(params),
    options: (...params) => FIND_OPTION(params)
  },
  Review: {
    product: (...params) => FIND_PRODUCT(params)
  },

  // MUTATION (STORE DATA)
  Mutation: {
    // User
    addUserInfo: (...params) => ADD_USER_INFO(params),
    editUserInfo: (...params) => EDIT_USER_INFO(params),

    // Product
    addProduct: (...params) => ADD_PRODUCT(params),
    editProduct: (...params) => EDIT_PRODUCT(params),
    addLikeProducts: (...params) => ADD_LIKE_PRODUCT(params),
    delLikeProducts: (...params) => DEL_LIKE_PRODUCT(params),

    // Reservation
    addReservation: (...params) => ADD_RESERVATION(params, reserveNumCal),
    modifyReservation: (...params) => MODIFY_RESERVATION(params),
    delReservation: (...params) => DEL_RESERVATION(params),
    fixReservation: (...params) => FIX_RESERVATION(params),
    confirmPurchase: (...params) => CONFIRM_PURCHASE(params),

    // Hospital Admin
    addHospitalAdmin: (...params) => ADD_HOSPITAL_ADMIN(params),
    delHospitalAdmin: (...params) => DEL_HOSPITAL_ADMIN(params),

    // Event
    addEvent: (...params) => ADD_EVENT(params),
    delEvent: (...params) => DEL_EVENT(params),

    // Notice (공지)
    addNotice: (...params) => ADD_NOTICE(params),
    delNotice: (...params) => DEL_NOTICE(params),

    // Banner
    addBanner: (...params) => ADD_BANNER(params),
    modifyBanner: (...params) => MODIFY_BANNER(params),
    delBanner: (...params) => DEL_BANNER(params),

    // Review
    addReview: (...params) => ADD_REVIEW(params)
  }
};
