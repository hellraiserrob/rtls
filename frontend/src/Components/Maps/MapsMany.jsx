import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultOptions={{ disableDefaultUI: true, draggable: false, scrollwheel: false }}
        defaultZoom={8}
        defaultCenter={props.center}
        center={props.center}
        markers={props.markers}
    >
        {props.markers.map((marker, index) => { 

            let icon = '/images/marker.png'

            if(marker.type === 'GPS'){
                icon = `/images/marker-gps.png`
            }
            if(marker.type === 'GPS' && marker.isFollowed){
                icon = `/images/marker-gps-followed.png`
            }

            if(marker.type === 'Temperature'){
                icon = `/images/marker-temperature.png`
            }
            if(marker.type === 'Temperature' && marker.isFollowed){
                icon = `/images/marker-temperature-followed.png`
            }

            return <Marker key={index} icon={icon} position={marker.location}>

                <InfoBox
                    onCloseClick={props.onToggleOpen}
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                >
                    <div className="marker-label">
                        <div>{marker.name}</div>
                    </div>
                </InfoBox>

            </Marker>

        }

        )}

    </GoogleMap>
))

class MapsMany extends Component {

    render() {

        const { center, markers, viewport } = this.props

        return (

            <div>
                <MyMapComponent
                    markers={markers}
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

export default MapsMany;
