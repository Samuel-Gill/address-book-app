import React from "react";
import Menu from "./components/Menu.jsx";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.jsx";
import Settings from "./containers/Settings.jsx";
import Search from "antd/lib/transfer/search";
import Redux from "./containers/Redux.jsx"
import Fetchapi from "./containers/Fetchapi.jsx"
import { Provider } from "react-redux";
import store from "./store.js";
import { API } from "./services/API.jsx";

//element={<Home />
function App() {
    return (
        <> 
            <Provider store={store}>
            <h1> Welcome {new Date().toString()} </h1>
            <Menu />
            
            <Switch>
                <Route exact path='/' component={() => <><Home/></>} />
                <Route exact path='/settings' component={() =><><Settings nat="CH"/></>} />
                <Route exact path='/search' component={() => <><Search/></>} />
                <Route exact path='/redux' component={() => <><Redux/></>} />
                <Route exact path='/api' component={() => <><API/></>} />
            </Switch>
            </Provider>
            {/* <Fetchapi /> */}
        </>
    );
}

export default App;