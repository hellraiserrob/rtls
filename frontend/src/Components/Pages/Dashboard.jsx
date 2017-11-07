import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderAuthenticated from '../Header/HeaderAuthenticated'

import DevicesTable from '../Devices/DevicesTable'
import Empty from '../Common/Empty'
import Alert from '../Alert/Alert'

import { toggleFollow } from '../../Actions/devicesActions'
import { alertHide } from '../../Actions/alertActions'


import MapsMany from '../Maps/MapsMany2'


class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }

        this.onChange = this.onChange.bind(this)
        this.clear = this.clear.bind(this)
    }

    onChange(event) {
        this.setState({ query: event.target.value });
    }

    followed(followed) {

        return followed.filter(item => item.isFollowed)
    }

    filter(devices, query) {

        return devices.filter(item => item.name.toLowerCase().indexOf(query) !== -1)

    }

    clear() {
        this.setState({
            query: ''
        })
    }

    render() {

        const { query } = this.state

        const { devices, alert, handleToggleFollow, handleAlertHide } = this.props


        const followed = this.followed(devices)
        const filtered = this.filter(devices, query)

        return (

            <div>

                <HeaderAuthenticated />

                <div className="wrap wider">

                    <div className="grid">

                        <div className="unit two-thirds">

                            <div className="grid">

                                <div className="unit half">
                                    <h1 className="mb0">Device Dashboard</h1>
                                </div>
                                <div className="unit half text-right">
                                    <Link to="/register" className="btn">
                                        <i className="material-icons">&#xE145;</i>
                                        Add New Device
                                    </Link>
                                </div>

                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestiae consequatur adipisci tenetur, quidem deserunt porro nemo, aperiam asperiores animi architecto, quod deleniti modi maxime aliquam corporis repellendus. Blanditiis, rem.
                            </p>

                            {alert.isVisible && <Alert alert={alert} alertHide={handleAlertHide} alertSnooze={handleAlertHide} />}

                            <div>

                                <input value={query} onChange={this.onChange} className="form-field" placeholder="Search..." />
                                {query.length > 0 && <a onClick={this.clear}>clear</a>}

                            </div>

                            <hr/>

                            <h2>Followed</h2>
                            {followed.length > 0 &&
                                <DevicesTable devices={followed} toggleFollow={handleToggleFollow} />
                            }

                            {!followed.length &&
                                <Empty />
                            }

                            <hr/>


                            <h2>All</h2>
                            <DevicesTable devices={filtered} toggleFollow={handleToggleFollow} />

                            {!filtered.length &&
                                <Empty />
                            }

                        </div>

                        <div className="unit one-third">

                            <MapsMany center={{ lat: 52.152029, lng: -0.863800 }}  />

                        </div>
                    </div>


                </div>

            </div>




        );
    }
}

function mapStateToProps(state) {

    const devices = state.devicesReducer
    const alert = state.alertReducer

    return {
        devices,
        alert
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleToggleFollow(e, id) {

            e.preventDefault()
            console.log('handle toggle follow')
            dispatch(toggleFollow(id))

        },
        handleAlertHide(e) {

            e.preventDefault()
            console.log('handle alert hide')
            dispatch(alertHide())

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


// export default Dashboard;
