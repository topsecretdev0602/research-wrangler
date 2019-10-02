import { GET_SEARCH_RESULTS } from "../actions/types.js";

const initialState = {
  results: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
}
