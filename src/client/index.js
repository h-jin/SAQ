import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store.js";
import SAQSearch from 'connectors/SAQSearch';

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={SAQSearch} />
            </Switch>
        </Router>
    </Provider>,
    MOUNT_NODE);

window.store = store;
