import {FETCH_MENU} from 'gnjoy/src/actions/types.js';
import axios from 'axios';

export function fetchDrinksMenu() {
  return function (dispatch) {
    axios
      .get(`http://192.168.0.16:8000/club/searchdrinksmenu/2`)
      .then((res) =>
        dispatch({
          type: FETCH_MENU,
          payload: res.data,
        }),
      )
      .catch((error) => {
        console.log('Error fetching doc', error);
      });
  };
}
