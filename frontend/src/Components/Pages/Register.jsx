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

                        <div className="unit whole">

                            <h1>Hello Bradley</h1>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestiae consequatur adipisci tenetur, quidem deserunt porro nemo, aperiam asperiores animi architecto, quod deleniti modi maxime aliquam corporis repellendus. Blanditiis, rem.
                            </p>


                            <div className="grid">
                                <div className="unit half">

                                    <form>

                                        <fieldset>

                                            <p>

                                                <label>Serial number</label>
                                                <input type="text" className="form-field text-uppercase" value="aaaa-bbbb-cccc-dddd" />

                                                <span className="hint">
                                                    Check this s/n matches the device
                                                </span>

                                            </p>

                                            <p>

                                                <label>Device name</label>
                                                <input type="text" className="form-field" value="Brads device" />

                                                <span className="hint">
                                                    You can change this later
                                                </span>

                                            </p>

                                            <div className="grid">
                                                <div className="unit half">

                                                    <p>
                                                        <Link to="/dashboard" className="btn">Confirm</Link>
                                                    </p>

                                                </div>
                                            </div>




                                        </fieldset>

                                    </form>

                                </div>

                                <div className="unit half">

                                    image

                                </div>
                            </div>


                            <p>

                                <Link to="/dashboard">Skip this step</Link>

                            </p>


                        </div>

                    </div>


                </div>
            </div>


        );
    }
}

export default Login;
