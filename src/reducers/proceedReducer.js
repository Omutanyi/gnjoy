import {FETCH_MENU} from 'gnjoy/src/actions/types.js';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
