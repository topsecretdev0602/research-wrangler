import axios from "axios";
import store from "../store";

import { GET_SEARCH_RESULTS } from "./types";
import { PubmarksUrls } from "./urls";

// Get the search results through the backend
export const getSearchResults = (query, page) => dispatch => {
  const token = store.getState().auth.token;
  if (token) {
    axios
      .get(`${PubmarksUrls.PUBMARKS_SEARCH}?query=${query}&page=${page}`, {
        headers: {
          authorization: "Token " + token
        }
      })
      .then(response => {
        dispatch({
          type: GET_SEARCH_RESULTS,
          payload: response.data.results
        });
      })
      .catch(error => {
        // If request is bad...
        // Show an error to the user
        console.log(error);
      });
  }
};
