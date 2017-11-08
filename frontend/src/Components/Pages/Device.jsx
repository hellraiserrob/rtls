import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderAuthenticated from '../Header/HeaderAuthenticated'

import MessagesJourney from '../Messages/MessagesJourney'
import Temperature from '../Temperature/Temperature'

import MapsSingle from '../Maps/MapsSingle'

import { toggleFollow, changeName } from '../../Actions/devicesActions'

import { getViewportSize } from '../../Utils/screen'

class Device extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            mapPosition: null
        }

        this.toggle = this.toggle.bind(this)
        this.setPosition = this.setPosition.bind(this)
        this.resetPosition = this.resetPosition.bind(this)
    }

    componentDidMount() {

        const { id } = this.props.match.params
        const { devices } = this.props
        const device = this.filter(devices, parseInt(id, 0))

        this.setState({
            mapPosition: device.location
        })

    }

    setPosition(e, location) {

        e.preventDefault()

        this.setState({
            mapPosition: location
        })
    }

    resetPosition(e, location) {

        e.preventDefault()

        this.setState({
            mapPosition: location
        })
    }

    toggle() {

        const { editing } = this.state

        this.setState({
            editing: !editing
        })
    }


    filter(devices, id) {

        return devices.filter(item => item.id === id)[0]

    }

    render() {

        const { editing, mapPosition } = this.state

        const { devices, handleToggleFollow, handleChangeName } = this.props

        const { id } = this.props.match.params
        const device = this.filter(devices, parseInt(id, 0))

        const viewport = getViewportSize()

        return (

            <div className="mb50">

                <HeaderAuthenticated />

                <div className="wrap wider">

                    <div className="grid">

                        <div className="unit whole">


                            <div className="grid">

                                <div className="unit half">

                                    <p>
                                        <Link to="/dashboard">
                                            <i className="material-icons">&#xE5CB;</i>
                                            Back
                                        </Link>
                                    </p>



                                    <h1>

                                        {editing &&
                                            <input type="text" value={device.name} className="form-field" onChange={(e) => handleChangeName(e, device.id)} />
                                        }

                                        <a onClick={this.toggle}>
                                            {!editing && device.name} <i className="material-icons">&#xE254;</i>
                                        </a>

                                        <div className="status">
                                            {device.status}
                                        </div>
                                    </h1>

                                    <hr/>




                                    <div className="grid">

                                        <div className="unit half">

                                            <h2>
                                                Device details <i className="material-icons">&#xE254;</i>
                                            </h2>

                                            <div className="grid">
                                                <div className="unit half"><label>Serial number</label></div>
                                                <div className="unit half">{device.serialNumber}</div>
                                            </div>

                                            <div className="grid mb10">
                                                <div className="unit half"><label>Type</label></div>
                                                <div className="unit half">{device.type}</div>
                                            </div>

                                            <div className="grid mb10">
                                                <div className="unit half"><label>Installation date</label></div>
                                                <div className="unit half">01/11/2017 12:00:00</div>
                                            </div>

                                            <div className="grid ">
                                                <div className="unit half"><label>Installation address</label></div>
                                                <div className="unit half">
                                                    12 Address line 1,<br />
                                                    London, SW1,
                                                    United Kingdom
                                                </div>
                                            </div>

                                            <hr/>

                                            <div className="grid mb10">
                                                <div className="unit half">
                                                    <label>Installation picture</label>
                                                    <a>Upload new picture</a>
                                                </div>
                                                <div className="unit half">

                                                    <div className="image"></div>
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="grid mb10">
                                                <div className="unit half">
                                                    <label>Group</label>

                                                </div>
                                                <div className="unit half">
                                                    Group 1, <br />
                                                    Group 2, <br />
                                                    Group 3 <br />
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="grid mb10">
                                                <div className="unit half">
                                                    <label>Billing information</label>

                                                </div>
                                                <div className="unit half">
                                                    12 Address line 1,<br />
                                                    London, SW1,
                                                    United Kingdom,
                                                    VAT 123
                                                </div>
                                            </div>

                                            <div className="grid mb10">
                                                <div className="unit half">
                                                    <label>Next payment date</label>

                                                </div>
                                                <div className="unit half">
                                                    01/12/2017 12:00:00
                                                </div>
                                            </div>

                                        </div>

                                        <div className="unit half">

                                            {device.type === 'GPS' && <MessagesJourney messages={device.log} setPosition={this.setPosition}  />}
                                            {device.type === 'Temperature' && <Temperature device={device} />}

                                        </div>
                                    </div>


                                    <hr />


                                    <div>

                                        <a onClick={(e) => handleToggleFollow(e, device.id)} className="btn">


                                            {!device.isFollowed && <i className="material-icons">&#xE83A;</i>}
                                            {device.isFollowed && <i className="material-icons">&#xE838;</i>}

                                            Add to watchlist

                                        </a>

                                        <a className="btn">
                                            <i className="material-icons">&#xE7F4;</i>
                                            Request maintenance
                                        </a>

                                    </div>

                                </div>


                                <div className="unit one-half">

                                    {mapPosition &&
                                        <div className="map">
                                            <MapsSingle center={mapPosition} viewport={viewport} device={device} />
                                        </div>
                                    }


                                    {/* <div>

                                        <a onClick={(e)=>this.resetPosition(e, device.location)}>Reset map</a>

                                    </div> */}

                                </div>

                            </div>


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
        handleToggleFollow(e, id) {
            e.preventDefault()
            dispatch(toggleFollow(id))
        },
        handleChangeName(e, id) {
            dispatch(changeName(id, e.target.value))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Device)


// export default Dashboard;
