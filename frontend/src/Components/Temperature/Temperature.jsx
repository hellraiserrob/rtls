import React, { Component } from 'react';

import graph from './graph.png'


class Temperature extends Component {

    
    render() {

        const { device } = this.props

        return (

            <div className="p20 bg-grey">

                <h2 className="mb10">Monitor</h2>

                <h4 className="mb0">Current temperature</h4>

                <div>

                    <h1 className="text-red text-xl mb0">
                        {device.temperature}&deg;C
                    </h1>
                    <p className="text-red">
                        <small>The temperature {device.temperature}&deg;C which is above maximum thresholds</small>
                    </p>
                </div>

                <hr/>
                
                <div className="mb30">

                    <img src={graph} className="img-responsive" alt="graph" />

                </div>
                
                <a>View History</a>




            </div>


        );
    }
}

export default Temperature;
