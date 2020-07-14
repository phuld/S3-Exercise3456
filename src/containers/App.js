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
// import PrivateRoute from '../utils/PrivateRoute';
// import Message from '../components/UI/Message';

function App() {

    return (
        <Router>
            {/* <Message/> */}
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
                <Route path="/dashboard/manage-users" component={Dashboard}/>
                <Route path="/dashboard/manage-products" component={Dashboard}/>
                <Route path="/dashboard/manage-orders" component={Dashboard}/>
                <Route path="*" component={Page404}/>
            </Switch>
        </Router>
    );
}

export default App;
