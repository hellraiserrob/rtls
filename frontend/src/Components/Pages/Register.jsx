import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../Header/Header'

import { addDevice } from '../../Actions/devicesActions.js'

class Register extends Component {

    constructor(props) {

        super(props)

        this.state = {
            serialNumber: '',
            name: '',
            redirect: false,

        }

        this.save = this.save.bind(this)
        this.handleSnChange = this.handleSnChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)

    }

    componentDidMount(){
        this.sn.focus()
    }

    save(e) {

        e.preventDefault();

        const { name, serialNumber } = this.state

        this.props.handleAddDevice({
            name, serialNumber,
            isFollowed: false,
            type: 'GPS',
            status: 'Stationary',
            log: [{
                text: 'Latest text',
                date: new Date(),
                address: 'Address name 123',
                location: { lat: 51.627903, lng: 0.418397 } 
        
            }],
            location: { lat: 51.627903, lng: 0.418397 },
            installationDate: new Date(),
            groups: []
        })

        this.setState({
            redirect: true
        })


    }

    handleSnChange(e) {

        this.setState({
            serialNumber: e.target.value
        })

    }

    handleNameChange(e) {

        this.setState({
            name: e.target.value
        })

    }



    render() {

        const { serialNumber, name, redirect } = this.state

        return (

            <div>

                {redirect && <Redirect to="/dashboard" />}

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

                                    <form onSubmit={this.save}>

                                        <fieldset>

                                            <p>

                                                <label>Serial number</label>
                                                <input ref={(sn) => {this.sn = sn}} type="text" className="form-field text-uppercase" value={serialNumber} onChange={this.handleSnChange} placeholder="0000 0000 0000 0000" />

                                                <span className="hint">
                                                    Check this s/n matches the device
                                                </span>

                                            </p>

                                            <p>

                                                <label>Device name</label>
                                                <input type="text" className="form-field" value={name} onChange={this.handleNameChange} placeholder="My new GPS device" />

                                                <span className="hint">
                                                    You can change this later
                                                </span>

                                            </p>



                                            <div className="grid">
                                                <div className="unit half">

                                                    <p>
                                                        {/* <Link to="/dashboard" className="btn">Confirm</Link> */}

                                                        <button disabled={name.length === 0 || serialNumber.length === 0} className="btn" onClick={this.save}>Add</button>
                                                    </p>

                                                </div>
                                            </div>




                                        </fieldset>

                                    </form>

                                </div>

                                <div className="unit one-quarter">

                                </div>
                                <div className="unit one-quarter">
                                    <div className="image"></div>
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



function mapStateToProps(state) {

    const devices = state.devicesReducer

    return {
        devices
        
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleAddDevice(device) {

            dispatch(addDevice(device))

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)
