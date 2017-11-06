import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


import HeaderAuthenticated from '../Header/HeaderAuthenticated'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))


class Login extends Component {

    render() {

        return (

            <div>

                <HeaderAuthenticated />

                <div className="wrap wider">

                    <div className="grid">

                        <div className="unit whole">


                            <div className="grid">

                                <div className="unit half">
                                    <h1>Hello Bradley</h1>
                                </div>
                                <div className="unit half text-right">
                                    <Link to="/register" className="btn">Add New Device</Link>
                                </div>

                            </div>


                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestiae consequatur adipisci tenetur, quidem deserunt porro nemo, aperiam asperiores animi architecto, quod deleniti modi maxime aliquam corporis repellendus. Blanditiis, rem.
                            </p>


                            <div className="grid">
                                <div className="unit half">

                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Device</th>
                                                <th>Type</th>
                                                <th>Most recent message</th>
                                                <th>Status</th>
                                                <th>actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <strong>
                                                            My first GPS
                                                    </strong>
                                                    </div>
                                                    21FA10
                                                </td>
                                                <td>GPS</td>
                                                <td>Right now</td>
                                                <td>Stationary</td>
                                                <td>
                                                    <a href="/view">View on map</a>
                                                    <a href="/details">Device details</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div className="unit half">

                                    <MyMapComponent
                                        isMarkerShown
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `400px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />

                                </div>
                            </div>


                        </div>

                    </div>


                </div>
            </div>


        );
    }
}

export default Login;
