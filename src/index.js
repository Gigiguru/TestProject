import React from 'react';
import { render } from 'react-dom';
import Main from './components/index';
import { Provider } from "react-redux";
import store from "./store";
require ("./styles.css");


render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);