import React from "react";
import Layout from "./components/common/layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
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
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/settings' element={<Settings />} />
                    </Routes>
                </Layout>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;