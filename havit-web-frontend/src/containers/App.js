import App from 'components/App';
import * as actions from 'actions/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  products: state.products,
  reservations: state.reservations,
  likeProducts: state.likeProducts,
  userInfo: state.userInfo,
  review: state.review,
});

const mapDispatchToProps = dispatch => ({
  getProducts: (type, subType) => {
    dispatch(actions.getProducts(type, subType));
  },

  getReservations: email => {
    dispatch(actions.getReservations(email));
  },

  getLikeProducts: email => {
    dispatch(actions.getLikeProducts(email));
  },

  getUserInfo: email => {
    dispatch(actions.getUserInfo(email));
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
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
