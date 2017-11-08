import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultOptions={{ disableDefaultUI: true, draggable: false, scrollwheel: false }}
        defaultZoom={8}
        defaultCenter={props.center}
        center={props.center}
    >
        {props.isMarkerShown && <Marker icon={props.icon} position={props.center}>


        </Marker>}

    </GoogleMap>
))

class MapsSingle extends Component {

    render() {

        const { center, viewport, device } = this.props

        let icon = '/images/marker.png'

        if (device.type === 'GPS') {
            icon = `/images/marker-gps.png`
        }
        if (device.type === 'GPS' && device.isFollowed) {
            icon = `/images/marker-gps-followed.png`
        }

        if (device.type === 'Temperature') {
            icon = `/images/marker-temperature.png`
        }
        if (device.type === 'Temperature' && device.isFollowed) {
            icon = `/images/marker-temperature-followed.png`
        }


        return (

            <div>
                <MyMapComponent
                    icon={icon}
                    center={center}
                    isMarkerShown={true}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCcKZXyVXhA8YcOU_9vQ3UXbJ2kiz4GiVw&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: viewport.height }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />



            </div>

        );
    }
}

export default MapsSingle;
