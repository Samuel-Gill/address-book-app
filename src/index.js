require('file-loader?name=app.[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";
import "antd/dist/antd.css";
import "../src/index.less";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('app')
);
