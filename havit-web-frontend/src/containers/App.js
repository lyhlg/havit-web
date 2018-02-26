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

  getUserInfo: email => {
    dispatch(actions.getUserInfo(email));
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

  getBanners: priority => {
    dispatch(actions.getBanners(priority));
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

  modifyReservation: (reserveNum, userName, phone, reserveDate) => {
    dispatch(
      actions.modifyReservation(reserveNum, userName, phone, reserveDate)
    );
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
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
