import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Select the root DOM element
const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
const root = createRoot(rootElement);

// Render your App component into the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
