// reducers/index.ts

import { combineReducers } from 'redux';
import counterReducer from './counter';
import itemsReducer from '../../features/itemsSlice';
const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here+
  articulos: itemsReducer,
});

export default rootReducer;
