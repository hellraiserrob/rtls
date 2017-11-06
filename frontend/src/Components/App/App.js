import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    // Link
} from 'react-router-dom'

import { Provider } from 'react-redux';
import store from '../../store'

import Landing from '../Pages/Landing'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Dashboard from '../Pages/Dashboard'

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

                    <div>

                        {/* <Link to="">Home</Link>
        <Link to="/login">Login</Link> */}

                        <Route exact path="/" component={Landing} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/dashboard" component={Dashboard} />

                    </div>

                </Router>

            </Provider>
        );
    }
}

export default App;
