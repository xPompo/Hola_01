import React from "react";
import ReactDOM from "react-dom";
import store from "./ReduxStore/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import WithRouterApp from "./App";
import "./index.scss";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <WithRouterApp />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
