require('file-loader?name=[name.[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('app')
);
