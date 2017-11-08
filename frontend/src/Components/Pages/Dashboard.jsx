import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderAuthenticated from '../Header/HeaderAuthenticated'

import DevicesTable from '../Devices/DevicesTable'
import Empty from '../Common/Empty'
import Alert from '../Alert/Alert'

import { toggleFollow } from '../../Actions/devicesActions'
import { alertHide } from '../../Actions/alertActions'



import MapsMany from '../Maps/MapsMany'
// import MapsMany from '../Maps/MapsMany2'

import { getViewportSize } from '../../Utils/screen'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: '',
            center: null
        }

        this.onChange = this.onChange.bind(this)
        this.clear = this.clear.bind(this)
        this.changeCenter = this.changeCenter.bind(this)
    }

    componentDidMount() {

        const { devices } = this.props

        this.setState({
            center: devices[0].location
        })

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

    changeCenter(e, center) {

        e.preventDefault()

        this.setState({
            center
        })
    }

    clear() {
        this.setState({
            query: ''
        })
    }

    render() {

        const { query, center } = this.state

        const { devices, alert, handleToggleFollow, handleAlertHide } = this.props


        const followed = this.followed(devices)
        const filtered = this.filter(devices, query)

        const viewport = getViewportSize()

        return (

            <div>

                <HeaderAuthenticated />

                <div className="wrap wider">

                    <div className="grid xs-grid-flex">

                        <div className="unit half xs-order-2">

                            <div className="grid">

                                <div className="unit two-thirds">
                                    <h1 className="mb0">Device Dashboard</h1>
                                </div>
                                <div className="unit one-third text-right">
                                    <Link to="/register" className="btn">
                                        <i className="material-icons">&#xE145;</i>
                                        Add New Device
                                    </Link>
                                </div>

                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </p>

                            {alert.isVisible && <Alert alert={alert} alertHide={handleAlertHide} alertSnooze={handleAlertHide} />}

                            <div className="mb30">

                                <div className="grid">
                                    <div className="unit three-quarters xs-mb5">
                                        <input value={query} onChange={this.onChange} className="form-field" placeholder="Search..." />
                                        {query.length > 0 && <a onClick={this.clear}>clear</a>}
                                    </div>
                                    <div className="unit one-quarter">
                                        <a href="" className="btn btn-block">
                                            <i className="material-icons">&#xE8B8;</i>
                                            Filters
                                        </a>
                                    </div>
                                </div>


                            </div>



                            <h2>Watchlist</h2>
                            {followed.length > 0 &&
                                <DevicesTable devices={followed} toggleFollow={handleToggleFollow} changeCenter={this.changeCenter} />
                            }

                            {!followed.length &&
                                <Empty />
                            }


                            <h2>All</h2>
                            <DevicesTable devices={filtered} toggleFollow={handleToggleFollow} changeCenter={this.changeCenter} />

                            {!filtered.length &&
                                <Empty />
                            }

                        </div>

                        <div className="unit half  xs-order-1">

                            <div className="map">
                                <MapsMany markers={filtered} center={center} viewport={viewport} />
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
            // console.log('handle toggle follow')
            dispatch(toggleFollow(id))

        },
        handleAlertHide(e) {

            e.preventDefault()
            // console.log('handle alert hide')
            dispatch(alertHide())

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


// export default Dashboard;
