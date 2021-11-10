import React from "react";
import Menu from "./components/Menu.jsx";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.jsx";
import Settings from "./containers/Settings.jsx";
import Search from "antd/lib/transfer/search";
//import Details from "./containers/Details.jsx";

//element={<Home />
function App() {
    return (
        <>
            <h1> Welcome {new Date().toString()} </h1>
            <Menu />
            <Switch>
                <Route exact path='/' component={() => <><Home/></>} />
                <Route exact path='/settings' component={() =><><Settings nat="CH"/></>} />
                <Route exact path='/search' component={() => <><Search/></>} />
                
            </Switch>
        </>
    );
}

export default App;