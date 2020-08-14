import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
require("dotenv").config();

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
