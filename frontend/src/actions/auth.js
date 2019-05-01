import axios from "axios";
import { SubmissionError } from "redux-form";
import history from "../utils/historyUtils.js";

import { LOGIN, LOGOUT, USER_PROFILE } from "./types";
import { AuthUrls } from "./urls";
import store from "../store";

export function getUserToken(state) {
  return state.auth.token;
}

export function authLogin(token) {
  return {
    type: LOGIN,
    payload: token
  };
}

export function authLogout() {
  return {
    type: LOGOUT,
    payload: null
  };
}

export function loginUser(formValues, dispatch, props) {
  const loginUrl = AuthUrls.LOGIN;

  return axios
    .post(loginUrl, formValues)
    .then(response => {
      // If request is good...
      // Update state to indicate user is authenticated
      const token = response.data.key;
      dispatch(authLogin(token));

      localStorage.setItem("token", token);

      history.push("/");
    })
    .catch(error => {
      const processedError = processServerError(error.response.data);
      throw new SubmissionError(processedError);
    });
}

export const logoutUser = () => dispatch => {
  const logoutUrl = AuthUrls.LOGOUT;

  return axios
    .post(logoutUrl)
    .then(response => {
      // If request is good...
      // Update state to indicate user is authenticated

      localStorage.removeItem("token");
      dispatch(authLogout());

      history.push("/");
    })
    .catch(error => {
      const processedError = processServerError(error.response.data);
      throw new SubmissionError(processedError);
    });
};

export function registerUser(formValues, dispatch, props) {
  const registerUrl = AuthUrls.REGISTER;

  return axios
    .post(registerUrl, formValues)
    .then(response => {
      history.push("/");
    })
    .catch(error => {
      console.log("registration error " + error);
      // If request is bad...
      // Show an error to the user
      const processedError = processServerError(error.response.data);
      throw new SubmissionError(processedError);
    });
}

function setUserProfile(payload) {
  return {
    type: USER_PROFILE,
    payload: payload
  };
}

export function getUserProfile() {
  return function(dispatch) {
    const token = store.getState().auth.token;
    if (token) {
      axios
        .get(AuthUrls.USER_PROFILE, {
          headers: {
            authorization: "Token " + token
          }
        })
        .then(response => {
          dispatch(setUserProfile(response.data));
        })
        .catch(error => {
          // If request is bad...
          // Show an error to the user
          console.log(error);
        });
    }
  };
}

// util functions
function processServerError(error) {
  return Object.keys(error).reduce(
    function(newDict, key) {
      if (key === "non_field_errors") {
        newDict["_error"].push(error[key]);
      } else if (key === "token") {
        // token sent with request is invalid
        newDict["_error"].push("The link is not valid any more.");
      } else {
        newDict[key] = error[key];
      }

      return newDict;
    },
    { _error: [] }
  );
}
