import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Header from '../Header/Header'

class Login extends Component {

    render() {

        return (

            <div>

                <Header />

                <div className="wrap wider">

                    <div className="grid">

                        <div className="unit half">

                            <h1>Log in</h1>

                            <p>
                                Log in with existing credentials, or if you don't have any, <Link to="/">register</Link>
                            </p>

                            <form>

                                <fieldset>

                                    <p>

                                        <label>email address</label>
                                        <input type="text" className="form-field" value="bradley.howard@endava.com" />

                                    </p>
                                    <p>

                                        <label>Password </label>
                                        <input type="password" className="form-field" value="12345678" />

                                    </p>

                                    <p>
                                        <Link to="/dashboard" className="btn">Submit</Link>
                                    </p>

                                    <p>
                                        <a href="/forgotten">Forgotten your password?</a>
                                    </p>




                                </fieldset>

                            </form>

                        </div>

                    </div>


                </div>
            </div>


        );
    }
}

export default Login;
