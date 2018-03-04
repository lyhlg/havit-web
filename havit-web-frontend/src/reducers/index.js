import { combineReducers } from 'redux';
import products from './products';
import reservations from './reservations';
import likeProducts from './likeProducts';
import userInfo from './userInfo';
import addLikeProducts from './addLikeProducts';
import addUserInfo from './addUserInfo';
import hospital from './hospital';
import hospitalAdmin from './hospitalAdmin';
import notices from './notices';
import banners from './banners';
import events from './events';
import payment from './payment';

export default combineReducers({
  products,
  reservations,
  likeProducts,
  userInfo,
  addLikeProducts,
  addUserInfo,
  hospital,
  hospitalAdmin,
  notices,
  banners,
  events,
  payment,
});
