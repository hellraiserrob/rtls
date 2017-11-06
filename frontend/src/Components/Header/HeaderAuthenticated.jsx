import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './HeaderAuthenticated.css'

class HeaderAuthenticated extends Component {

        render() {

            return (

                <header>

                    <nav>
                        <ul>
                            <li>
                                <Link to="/login">Logout</Link>
                            </li>
                        </ul>
                    </nav>


                </header>

            );
        }
    }

export default HeaderAuthenticated;
