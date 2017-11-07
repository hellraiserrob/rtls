import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultOptions={{ disableDefaultUI: true }}
        defaultZoom={8}
        defaultCenter={props.center}
        center={props.center}
    >
        {props.isMarkerShown && <Marker icon={`/images/marker.png`} position={props.center}>

            <InfoBox
                onCloseClick={props.onToggleOpen}
                options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
                <div>Test</div>
            </InfoBox>

        </Marker>}

    </GoogleMap>
))

class MapsMany extends Component {

    render() {

        const { center } = this.props

        return (

            <div>
                <MyMapComponent
                    
                    center={center}
                    isMarkerShown={true}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCcKZXyVXhA8YcOU_9vQ3UXbJ2kiz4GiVw&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />



            </div>

        );
    }
}

export default MapsMany;
