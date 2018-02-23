import { reserveNumCal } from '../../utils';
import * as query from '../queries';
import {
  FIND_USER,
  FIND_RESERVATION,
  FIND_PRODUCT,
  LIKE_PRODUCT,
  GET_REVIEW_LIST_OF_PRODUCT,
  FIND_REVIEW,
  FIND_HOSPITAL,
  GET_HOSPITAL_RESERVATION_INFO,
  GET_HOSPITAL_PRODUCT_LIST,
  FIND_HOSPITAL_ADMIN,
  GET_BANNER_LIST,
  GET_BANNER_FROM_PRODUCT
} from "../queries";
import {
  ADD_RESERVATION,
  MODIFY_RESERVATION,
  FIX_RESERVATION,
  CONFIRM_PURCHASE,
  ADD_REVIEW,
  ADD_USER_INFO,
  ADD_LIKE_PRODUCT,
  ADD_PRODUCT,
  EDIT_USER_INFO
} from "../mutations";



export default {
  // QUERY (GET DATA)
  Query: {
    Users: (...params) => FIND_USER(params),
    Reservations: (...params) => FIND_RESERVATION(params),
    LikeProducts: (...params) => LIKE_PRODUCT(params),
    Products: (...params) => FIND_PRODUCT(params),
    Reviews: (...params) => FIND_REVIEW(params),
    Hospitals: (...params) => FIND_HOSPITAL(params),
    HospitalAdmin: (...params) => FIND_HOSPITAL_ADMIN(params),
    Banners: (...params) => GET_BANNER_LIST(params)
  },
  Banner: {
    totalBanners: (...params) => GET_BANNER_FROM_PRODUCT(params),
    skinBanners: (...params) => GET_BANNER_FROM_PRODUCT(params),
    beautyBanners: (...params) => GET_BANNER_FROM_PRODUCT(params)
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
    addReservation: (...params) => ADD_RESERVATION(params, reserveNumCal),
    addReview: (...params) => ADD_REVIEW(params),
    addUserInfo: (...params) => ADD_USER_INFO(params),
    addLikeProducts: (...params) => ADD_LIKE_PRODUCT(params),
    modifyReservation: (...params) => MODIFY_RESERVATION(params),
    fixReservation: (...params) => FIX_RESERVATION(params),
    confirmPurchase: (...params) => CONFIRM_PURCHASE(params),
    editUserInfo: (...params) => EDIT_USER_INFO(params)
  }
};
