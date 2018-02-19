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
  getProductsList: () => {
    dispatch(actions.getProductsList());
  },

  getReservationsList: () => {
    dispatch(actions.getReservationsList());
  },

  getLikeProductsList: email => {
    dispatch(actions.getLikeProductsList(email));
  },
});

const AppContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default AppContainer;
