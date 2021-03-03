import {combineReducers} from 'redux';
import proceedReducer from 'gnjoy/src/reducers/proceedReducer.js';

export default combineReducers({
  drinksMenu: proceedReducer,
});
