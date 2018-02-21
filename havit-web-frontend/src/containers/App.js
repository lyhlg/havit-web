import App from 'components/App';
import * as actions from 'actions/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  products: state.products,
  reservations: state.reservations,
  likeProducts: state.likeProducts,
});

const mapDispatchToProps = dispatch => ({
  getProducts: (type, subType) => {
    dispatch(actions.getProducts(type, subType));
  },

  getReservations: () => {
    dispatch(actions.getReservations());
  },

  getLikeProducts: email => {
    dispatch(actions.getLikeProducts(email));
  },
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
