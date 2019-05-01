import { GET_PUBMARKS, ADD_PUBMARK, DELETE_PUBMARK } from "../actions/types.js";

const initialState = {
  pubmarks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PUBMARKS:
      return { ...state, pubmarks: action.payload };
    case ADD_PUBMARK:
      return { ...state, pubmarks: [...state.pubmarks, action.payload] };
    case DELETE_PUBMARK:
      return {
        ...state,
        pubmarks: state.pubmarks.filter(
          pubmark => pubmark.id !== action.payload
        )
      };
    default:
      return state;
  }
}
