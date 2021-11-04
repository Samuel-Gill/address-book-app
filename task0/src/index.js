import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from "./Sdata";

const card = (value,index) => {
  return(
    <Card key={value.id} name={value.name} email={value.email}/> 
  )
}
ReactDOM.render(
  <>
    <h1 className="heading_style">Home</h1>
    {Sdata.map(card)};
  </>,
  document.getElementById('root')
);

