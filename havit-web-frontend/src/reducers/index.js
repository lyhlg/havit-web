import { combineReducers } from 'redux';
import products from './products';
import reservations from './reservations';
import likeProducts from './likeProducts';
import userInfo from './userInfo';

export default combineReducers({
  products,
  reservations,
  likeProducts,
  userInfo,
});
