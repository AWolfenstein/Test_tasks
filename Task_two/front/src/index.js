import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import store , { history } from "./store";
import "./index.css";
import Layout from './components/Layout'


const target = document.querySelector("#root");

render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
      <div>
        <Layout />
      </div>
</ConnectedRouter>
  </Provider>,
  target
);

