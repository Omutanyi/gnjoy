import {
  FETCH_DRINKS_MENU,
  ENTER_CLUB,
  FETCH_FOODS_MENU,
  SELECTED_TABLE,
} from 'gnjoy/src/actions/types.js';
import axios from 'axios';

export function fetchDrinksMenu() {
  return function (dispatch) {
    axios
      .get(`http://192.168.0.16:8000/club/searchdrinksmenu/2`)
      .then((res) =>
        dispatch({
          type: FETCH_DRINKS_MENU,
          payload: res.data,
        }),
      )
      .catch((error) => {
        console.log('Error fetching doc', error);
      });
  };
}

export function fetchFoodsMenu() {
  return function (dispatch) {
    axios
      .get(`http://192.168.0.16:8000/club/searchfoodsmenu/2`)
      .then((res) =>
        dispatch({
          type: FETCH_FOODS_MENU,
          payload: res.data,
        }),
      )
      .catch((error) => {
        console.log('Error fetching doc', error);
      });
  };
}

export const enterClub = (club) => (dispatch) => {
  console.log('action enetr club called...', club);
  dispatch({
    type: ENTER_CLUB,
    payload: club,
  });
};

export const selectTable = (table) => (dispatch) => {
  console.log('action enetr club called...', table);
  dispatch({
    type: SELECTED_TABLE,
    payload: table,
  });
};
