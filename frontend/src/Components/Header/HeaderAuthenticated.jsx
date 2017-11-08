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

                            <a className="only-on-mobiles mobile-nav">
                                <i className="material-icons">&#xE5D2;</i>
                            </a>
                        </div>




                        <div className="unit two-thirds hide-on-mobiles">

                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/account" className="btn">
                                            Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className="btn">
                                            Logout
                                        </Link>
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
