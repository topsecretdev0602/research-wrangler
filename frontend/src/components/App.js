import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import history from "../utils/historyUtils";
import { authLogin } from "../actions/auth";

import Header from "./layout/Header";
import Login from "./auth/Login";
import Register from "./auth/Register";
import PrivateRoute from "./auth/PrivateRoute";
import Pubmarks from "./pubmarks/Pubmarks";
import Search from "./search/Search";

const token = localStorage.getItem("token");

if (token) {
  store.dispatch(authLogin(token));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Fragment>
            <Header />
            <Switch>
              <PrivateRoute exact path="/" component={Search} />
              <PrivateRoute exact path="/pubmarks" component={Pubmarks} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
