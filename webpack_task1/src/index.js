require('file-loader?name=[name.[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//import App from './containers/App.jsx'
import store from "./store";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <>
    {/* <Provider store={store}> */}
      <BrowserRouter >
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </>,
  document.getElementById('app')
);

// import store from "./store";
// import { Provider } from "react-redux";


// store.subscribe(() => console.log(store.getState()));

// ReactDOM.render(
//   <BrowserRouter >
//     <Provider store={store}>
//       <h1>Hello</h1>
//     </Provider>
//     </BrowserRouter>,
//   document.getElementById('root')
// );
