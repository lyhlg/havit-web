import App from 'components/App';
import * as actions from 'actions/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  products: state.products,
  reservations: state.reservations,
  likeProducts: state.likeProducts,
  newLikeProduct: state.newLikeProduct,
  userInfo: state.userInfo,
  newUser: state.newUser,
  newUserInfo: state.newUserInfo,
  review: state.review,
  hospital: state.hospital,
  hospitalAdmin: state.hospitalAdmin,
  notices: state.notices,
  banners: state.banners,
  events: state.events,
  payment: state.payment,
  email: window.localStorage.getItem('email') || '',
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: (email, password) => {
    dispatch(actions.getUserInfo(email, password));
  },

  getProducts: (type, subType, page, productId) => {
    dispatch(actions.getProducts(type, subType, page, productId));
  },

  getReservations: (email, status, page) => {
    dispatch(actions.getReservations(email, status, page));
  },

  getLikeProducts: email => {
    dispatch(actions.getLikeProducts(email));
  },

  getHospital: email => {
    dispatch(actions.getHospital(email));
  },

  getHospitalAdmin: () => {
    dispatch(actions.getHospitalAdmin());
  },

  getNotices: () => {
    dispatch(actions.getNotices());
  },

  getBanners: () => {
    dispatch(actions.getBanners());
  },

  getEvents: (email, productId, page) => {
    dispatch(actions.getEvents(email, productId, page));
  },

  getPayment: code => {
    dispatch(actions.getPayment());
  },

  addReservation: (
    email,
    hospitalCode,
    userName,
    phone,
    productId,
    reserveDate
  ) => {
    dispatch(
      actions.addReservation(
        email,
        hospitalCode,
        userName,
        phone,
        productId,
        reserveDate
      )
    );
  },

  addReview: (email, stars, comment, productId) => {
    dispatch(actions.addReview(email, stars, comment, productId));
  },

  addUserInfo: (
    email,
    name,
    phone,
    birthday,
    gender,
    likeArea,
    likePoint,
    code
  ) => {
    dispatch(
      actions.addUserInfo(
        email,
        name,
        phone,
        birthday,
        gender,
        likeArea,
        likePoint,
        code
      )
    );
  },

  addLikeProducts: (email, productId) => {
    dispatch(actions.addLikeProducts(email, productId));
  },

  modifyReservation: (reserveNum, openPhoneNum, reserveDate) => {
    dispatch(actions.modifyReservation(reserveNum, openPhoneNum, reserveDate));
  },

  fixReservation: (reserveNum, careDate) => {
    dispatch(actions.fixReservation(reserveNum, careDate));
  },

  delReservation: (email, productId, reserveNum) => {
    dispatch(actions.delReservation(email, productId, reserveNum));
  },

  confirmPurchase: reserveNum => {
    dispatch(actions.confirmPurchase(reserveNum));
  },

  addUser: (email, specId, user) => {
    dispatch(actions.addUser(email, specId, user));
  },

  addNotice: (title, body, author, file) => {
    dispatch(actions.addNotice(title, body, author, file));
  },

  addBanner: (priority, title, url, status) => {
    dispatch(actions.addBanner(priority, title, url, status));
  },

  addHospitalAdmin: (code, name, loc) => {
    dispatch(actions.addHospitalAdmin(code, name, loc));
  },

  addEvent: (
    hospitalCode,
    productName,
    description,
    price,
    status,
    priority,
    productImage
  ) => {
    dispatch(
      actions.addEvent(
        hospitalCode,
        productName,
        description,
        price,
        status,
        priority,
        productImage
      )
    );
  },
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
