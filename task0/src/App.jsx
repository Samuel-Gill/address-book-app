import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
//import About from "./About";
//import Error from "./Error";
//import Contact from "./Contact";
import Menu from "./components/Menu";
import Search from "./containers/Search";
import BookResult from "./containers/BookResult";
import Settings from "./containers/Settings";

const App = () => {

  return (
    <>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/bookresult' element={<BookResult />} />
        <Route exact path='/settings' element={<Settings />} />
      </Routes>
    </>
  )
}

export default App;