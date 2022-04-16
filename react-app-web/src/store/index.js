import { createStore, combineReducers } from 'redux';

import cart from './cart';
import products from './products';
import config from './config';

const store = createStore(
  combineReducers({
    cart,
    products,
    config,
  }),
);

export default store;
