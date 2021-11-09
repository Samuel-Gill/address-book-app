require('file-loader?name=[name.[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('app')
);