import React from "react";
import Menu from "./components/layout/Menu.jsx";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.jsx";
import Settings from "./containers/Settings.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.js";

function App() {
    return (
        <>
            <Provider store={store}>
                <ErrorBoundary>
                    <Menu />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Switch>
                        <Route exact path='/' component={() => <><Home /></>} />
                        <Route exact path='/settings' component={() => <><Settings /></>} />
                    </Switch>
                </ErrorBoundary>
            </Provider>
        </>
    );
}

export default App;