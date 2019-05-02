import axios from "axios";
import store from "../store";

import { GET_PUBMARKS, ADD_PUBMARK, DELETE_PUBMARK } from "./types";
import { PubmarksUrls } from "./urls";

// Get the pubmarks from the backend
export const getPubmarks = () => dispatch => {
  const token = store.getState().auth.token;
  if (token) {
    axios
      .get(PubmarksUrls.PUBMARKS_URL, {
        headers: {
          authorization: "Token " + token
        }
      })
      .then(response => {
        dispatch({
          type: GET_PUBMARKS,
          payload: response.data
        });
      })
      .catch(error => {
        // If request is bad...
        // Show an error to the user
        console.log(error);
      });
  }
};

// Add the new pubmark to the backend
export const addPubmark = pubmark => dispatch => {
  const token = store.getState().auth.token;
  if (token) {
    axios
      .post(PubmarksUrls.PUBMARKS_URL, pubmark, {
        headers: {
          authorization: "Token " + token
        }
      })
      .then(response => {
        dispatch({
          type: ADD_PUBMARK,
          payload: response.data
        });
      })
      .catch(error => {
        // If request is bad...
        // Show an error to the user
        console.log(error);
      });
  }
};

// Delete the pubmark with passed in id
export const deletePubmark = id => dispatch => {
  const token = store.getState().auth.token;
  if (token) {
    axios
      .delete(`${PubmarksUrls.PUBMARKS_URL}${id}/`, {
        headers: {
          authorization: "Token " + token
        }
      })
      .then(response => {
        dispatch({
          type: DELETE_PUBMARK,
          payload: id
        });
      })
      .catch(error => {
        // If request is bad...
        // Show an error to the user
        console.log(error);
      });
  }
};
