import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
    // Link
} from 'react-router-dom'

import { Provider } from 'react-redux';
import store from '../../store'

import Landing from '../Pages/Landing'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Dashboard from '../Pages/Dashboard'
import Device from '../Pages/Device'
import NoMatch from '../Pages/NoMatch'

import './App.css';
import './Grid.css';
import './Button.css';
import './Inputs.css';
import './Type.css';
import './Table.css';
import './Helpers.css';

class App extends Component {

    render() {
        return (

            <Provider store={store}>
                <Router>

                    <Switch>

                        {/* <Link to="">Home</Link>
        <Link to="/login">Login</Link> */}

        

                        <Route exact path="/" component={Landing} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/device/:id" component={Device} />
                        <Route component={NoMatch} />

                    </Switch>

                </Router>

            </Provider>
        );
    }
}

export default App;
