import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { toggle } from '../../Actions/configActions'

import Header from '../Header/Header'

class Landing extends Component {

    render() {

        return (

            <div>

                <Header />

                <div className="wrap wider">

                    <div className="grid">

                        <div className="unit half">

                            <h1>Welcome</h1>

                            <p>
                                Please create an account below and then register your new device.<br />
                                Already have an account? <Link to="/login">Log in</Link>.
                            </p>

                            <form>

                                <fieldset>

                                    <p>

                                        <label>Name</label>
                                        <input type="text" className="form-field" />

                                    </p>
                                    <p>

                                        <label>email address</label>
                                        <input type="text" className="form-field" />

                                    </p>
                                    <p>

                                        <label>Company</label>
                                        <input type="text" className="form-field" />

                                    </p>
                                    <p>

                                        <label>Password </label>
                                        <input type="password" className="form-field" />
                                        <span className="hint">
                                            Make sure it's strong
                                        </span>

                                    </p>

                                    <p>
                                        <Link to="/register" className="btn">Submit</Link>
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


function mapStateToProps(state) {

    const config = state.configurationReducer

    return {
        config
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleToggle() {
            console.log('handle toggle')
            dispatch(toggle())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Landing)
