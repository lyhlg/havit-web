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
  email: window.localStorage.getItem('email') || '',
});

const mapDispatchToProps = dispatch => ({
  getProducts: (type, subType, id) => {
    dispatch(actions.getProducts(type, subType, id));
  },

  getReservations: (email, code) => {
    dispatch(actions.getReservations(email, code));
  },

  getLikeProducts: email => {
    dispatch(actions.getLikeProducts(email));
  },

  getUserInfo: (email, password) => {
    dispatch(actions.getUserInfo(email, password));
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

  getEvents: () => {
    dispatch(actions.getEvents());
  },

  addReservation: (
    email,
    hospitalCode,
    userName,
    phone,
    productName,
    reserveDate
  ) => {
    dispatch(
      actions.addReservation(
        email,
        hospitalCode,
        userName,
        phone,
        productName,
        reserveDate
      )
    );
  },

  addReview: (email, stars, comment, product) => {
    dispatch(actions.addReview(email, stars, comment, product));
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

  modifyReservation: (reserveNum, openPhoneNum) => {
    dispatch(actions.modifyReservation(reserveNum, openPhoneNum));
  },

  fixReservation: (reserveNum, careDate) => {
    dispatch(actions.fixReservation(reserveNum, careDate));
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
