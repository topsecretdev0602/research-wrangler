import { combineReducers } from "redux";
import pubmarks from "./pubmarks";
import auth from "./auth";
import { reducer as form } from "redux-form";

export default combineReducers({
  pubmarks,
  form,
  auth
});
