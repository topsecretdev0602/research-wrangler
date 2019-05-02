import { combineReducers } from "redux";
import pubmarks from "./pubmarks";
import auth from "./auth";
import search from "./search";
import { reducer as form } from "redux-form";

export default combineReducers({
  pubmarks,
  form,
  auth,
  search
});
