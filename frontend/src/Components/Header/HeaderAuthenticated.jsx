import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './HeaderAuthenticated.css'

class HeaderAuthenticated extends Component {

    render() {

        return (

            <header>

                <div className="wrap wider">

                    <div className="grid">

                        <div className="unit one-third">
                            <h2 className="mb0">Brand</h2>
                        </div>


                        <div className="unit two-thirds">

                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/login">Logout</Link>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                    </div>

                </div>


            </header>

        );
    }
}

export default HeaderAuthenticated;
