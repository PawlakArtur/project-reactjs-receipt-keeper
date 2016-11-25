import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import receipts from './receipts';

const rootReducer = combineReducers({ items, receipts, routing: routerReducer});

export default rootReducer;