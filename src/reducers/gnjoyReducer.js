import {
  FETCH_DRINKS_MENU,
  ENTER_CLUB,
  FETCH_FOODS_MENU,
  SELECTED_TABLE,
  ADDED_TO_CART,
} from 'gnjoy/src/actions/types.js';

const initialState = {
  drinksMenu: [],
  foodsMenu: [],
  club: [],
  table: [],
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DRINKS_MENU:
      return {
        ...state,
        drinksMenu: action.payload,
      };
    case FETCH_FOODS_MENU:
      return {
        ...state,
        foodsMenu: action.payload,
      };
    case ENTER_CLUB:
      return {
        ...state,
        club: action.payload,
      };
    case SELECTED_TABLE:
      return {
        ...state,
        table: action.payload,
      };
    case ADDED_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
