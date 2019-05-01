import { LOGIN, LOGOUT, USER_PROFILE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true, token: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, token: null };
    case USER_PROFILE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
