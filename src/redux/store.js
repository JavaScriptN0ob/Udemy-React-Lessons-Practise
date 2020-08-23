import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

// the reason why make an array, is more scalable for more middlewares coming
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;