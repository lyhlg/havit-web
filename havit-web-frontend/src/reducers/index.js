import { combineReducers } from 'redux';
import products from './products';
import reservations from './reservations';

export default combineReducers({
  products,
  reservations,
});
