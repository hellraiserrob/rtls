import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Header from '../Header/Header'

class NoMatch extends Component {

    render() {

        return (

            <div>

                <Header />

                <div className="wrap wider">

                    <div className="grid">

                        <div className="unit whole">

                            <h1>Oppps</h1>

                            <p>
                                We had a problem finding this page
                            </p>

                            <p>
                                <Link to="/login" className="btn">Log in</Link>
                            </p>


                        </div>

                    </div>


                </div>
            </div>


        );
    }
}

export default NoMatch;
