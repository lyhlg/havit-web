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
  login: state.login,
  newUserInfo: state.addUserInfo,
  review: state.review,
  hospital: state.hospital,
  hospitalAdmin: state.hospitalAdmin,
  notices: state.notices,
  banners: state.banners,
  events: state.events,
  payment: state.payment,
  maxPage: state.maxPage,
  dashBoard: state.dashBoard,
});

const mapDispatchToProps = dispatch => ({
  getLogin: (callback, email, password) => {
    dispatch(actions.getLogin(callback, email, password));
  },

  getUserInfo: (email, password) => {
    dispatch(actions.getUserInfo(email, password));
  },

  getProducts: (type, subType, productId, page) => {
    dispatch(actions.getProducts(type, subType, productId, page));
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

  getHospitalAdmin: page => {
    dispatch(actions.getHospitalAdmin(page));
  },

  getNotices: (id, page) => {
    dispatch(actions.getNotices(id, page));
  },

  getBanners: id => {
    dispatch(actions.getBanners(id));
  },

  getEvents: (email, productId, status, page) => {
    dispatch(actions.getEvents(email, productId, status, page));
  },

  getPayment: email => {
    dispatch(actions.getPayment(email));
  },

  getMaxPage: email => {
    dispatch(actions.getMaxPage(email));
  },

  getDashBoard: email => {
    dispatch(actions.getDashBoard(email));
  },

  getSearch: (filter, keyword) => {
    dispatch(actions.getSearch(filter, keyword));
  },

  addProduct: (
    type,
    subType,
    img,
    email,
    productName,
    description,
    price,
    ProductDetail,
    options,
    callback
  ) => {
    dispatch(
      actions.addProduct(
        type,
        subType,
        img,
        email,
        productName,
        description,
        price,
        ProductDetail,
        options,
        callback
      )
    );
  },

  editProduct: (
    productId,
    type,
    subType,
    img,
    productName,
    description,
    price,
    ProductDetail,
    options,
    callback
  ) => {
    dispatch(
      actions.editProduct(
        productId,
        type,
        subType,
        img,
        productName,
        description,
        price,
        ProductDetail,
        options,
        callback
      )
    );
  },

  addReservation: (
    email,
    hospitalCode,
    userName,
    phone,
    productId,
    option,
    reserveDate,
    callback
  ) => {
    dispatch(
      actions.addReservation(
        email,
        hospitalCode,
        userName,
        phone,
        productId,
        option,
        reserveDate,
        callback
      )
    );
  },

  addReview: (email, stars, comment, productId, callback) => {
    dispatch(actions.addReview(email, stars, comment, productId, callback));
  },

  addUserInfo: (
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
    dispatch(
      actions.addUserInfo(
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
    );
  },

  addLikeProducts: (email, productId) => {
    dispatch(actions.addLikeProducts(email, productId));
  },

  delLikeProducts: (email, productId, callback) => {
    dispatch(actions.delLikeProducts(email, productId, callback));
  },

  modifyReservation: (
    reserveNum,
    userName,
    phone,
    reserveDate,
    openPhoneNum,
    callback
  ) => {
    dispatch(
      actions.modifyReservation(
        reserveNum,
        userName,
        phone,
        reserveDate,
        openPhoneNum,
        callback
      )
    );
  },

  fixReservation: (reserveNum, careDate) => {
    dispatch(actions.fixReservation(reserveNum, careDate));
  },

  delReservation: (email, productId, reserveNum, callback) => {
    dispatch(actions.delReservation(email, productId, reserveNum, callback));
  },

  confirmPurchase: (reserveNum, productId, callback) => {
    dispatch(actions.confirmPurchase(reserveNum, productId, callback));
  },

  addNotice: (title, body, author, url, callback) => {
    dispatch(actions.addNotice(title, body, author, url, callback));
  },

  addBanner: (img, title, url, priority, callback) => {
    dispatch(actions.addBanner(img, title, url, priority, callback));
  },

  delBanner: (id, callback) => {
    dispatch(actions.delBanner(id, callback));
  },

  addHospitalAdmin: (code, name, loc, callback) => {
    dispatch(actions.addHospitalAdmin(code, name, loc, callback));
  },

  addEvent: (
    hospitalCode,
    productName,
    description,
    img,
    price,
    status,
    priority,
    productDetails,
    callback
  ) => {
    dispatch(
      actions.addEvent(
        hospitalCode,
        productName,
        description,
        img,
        price,
        status,
        priority,
        productDetails,
        callback
      )
    );
  },

  delEvent: (hospitalCode, productId, callback) => {
    dispatch(actions.delEvent(hospitalCode, productId, callback));
  },

  delProduct: (productId, callback) => {
    dispatch(actions.delProduct(productId, callback));
  },

  delHospitalAdmin: (code, callback) => {
    dispatch(actions.delHospitalAdmin(code, callback));
  },
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
