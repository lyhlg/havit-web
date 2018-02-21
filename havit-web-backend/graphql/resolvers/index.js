import { reserveNumCal } from '../../utils';
import * as query from '../queries';
import * as mutation from '../mutations';

export default {
  // QUERY (GET DATA)
  Query: {
    Users: (...params) => query.FIND_USER(params),
    Reservations : (...params) => query.FIND_RESERVATION(params),
    LikeProducts: (...params) => query.LIKE_PRODUCT(params),
    Products: (...params) => query.FIND_PRODUCT(params),
    Reviews: (...params) => query.FIND_REVIEW(params),
    Hospitals: (...params) => query.FIND_HOSPITAL(params),
    HospitalAdmin: (...params) => query.FIND_HOSPITALADMIN(params),
    Banners: (...params) => query.GET_BANNER_LIST(params)
  },
  Banner : {
    totalBanners : (...params) => query.GET_BANNER_FROM_PRODUCT(params),
    skinBanners: (...params) => query.GET_BANNER_FROM_PRODUCT(params),
    beautyBanners: (...params) => query.GET_BANNER_FROM_PRODUCT(params)
  },
  Hospital : {
    reservations: (...params) => query.GET_HOSPITAL_RESERVATION_INFO(params),
    products: (...params) => query.GET_HOSPITAL_PRODUCT_LIST(params)
  },
  Product: {
    reviews: (...params) => query.GET_REVIEW_LIST_OF_PRODUCT(params)
  },
  User: {
    reservation: (...params) => query.FIND_RESERVATION(params),
    likeProduct: (...params) => query.LIKE_PRODUCT(params),
    reviews: (...params) => query.FIND_REVIEW(params)
  },
  Review : {
    product: (...params) => query.FIND_PRODUCT(params)
  },

  // MUTATION (STORE DATA)
  Mutation: {
    addReservation: (...params) => mutation.ADD_RESERVATION(params, reserveNumCal),
    addReview: (...params) => mutation.ADD_REVIEW(params),
    addUserInfo: (...params) => mutation.ADD_USER_INFO(params),
    addLikeProducts: (...params) => mutation.ADD_LIKE_PRODUCT(params),
    modifyReservation : (...params) => mutation.MODIFY_RESERVATION(params),
    fixReservation : (...params) => mutation.FIX_RESERVATION(params),
    confirmPurchase: (...params) => mutation.CONFIRM_PURCHASE(params)
  }
};
