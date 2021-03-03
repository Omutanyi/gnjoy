import {combineReducers} from 'redux';
import gnjoyReducer from 'gnjoy/src/reducers/gnjoyReducer.js';

export default combineReducers({
  drinksMenu: gnjoyReducer,
  foodsMenu: gnjoyReducer,
  club: gnjoyReducer,
  table: gnjoyReducer,
});
