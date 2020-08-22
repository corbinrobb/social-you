import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
