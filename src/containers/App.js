import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import './App.css';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';
import Dashboard from '../pages/Dashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="*">
                    <Page404/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
