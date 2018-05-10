import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { Provider } from "react-redux";
import store from "./store";
require ("./styles.css");


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);