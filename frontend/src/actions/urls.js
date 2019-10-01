const ROOT_URL = "http://localhost:8000/";

export const AuthUrls = {
  LOGIN: `${ROOT_URL}rest-auth/login/`,
  LOGOUT: `${ROOT_URL}rest-auth/logout/`,
  REGISTER: `${ROOT_URL}rest-auth/registration/`,
  USER_PROFILE: `${ROOT_URL}rest-auth/user/`
};

export const PubmarksUrls = {
  PUBMARKS_URL: `${ROOT_URL}api/pubmarks/`,
  PUBMARKS_SEARCH: `${ROOT_URL}api/search/`
};
