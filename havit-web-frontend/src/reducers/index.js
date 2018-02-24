import { combineReducers } from 'redux';
import products from './products';
import reservations from './reservations';
import likeProducts from './likeProducts';
import userInfo from './userInfo';
import addLikeProducts from './addLikeProducts';
import addUserInfo from './addUserInfo';
import newUser from './newUser';

export default combineReducers({
  products,
  reservations,
  likeProducts,
  userInfo,
  addLikeProducts,
  addUserInfo,
  newUser,
});
