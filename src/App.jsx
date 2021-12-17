import React from "react";
import Layout from "./components/common/layout/Layout.jsx";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home.jsx";
import Settings from "./containers/Settings.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ErrorBoundary from "./components/common/errorboundary/ErrorBoundary.js";

function App() {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Layout className="layout-main">
                    <Switch>
                        <Route exact path='/' component={() => <><Home /></>} />
                        <Route exact path='/settings' component={() => <><Settings /></>} />
                    </Switch>
                </Layout>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;