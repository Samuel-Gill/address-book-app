import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
//import About from "./About";
//import Error from "./Error";
//import Contact from "./Contact";
import Menu from "./Menu";
import Search from "./Search";

const App = () => {

  return (
    <>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<Search />} />
      </Routes>
    </>
  )
}

export default App;