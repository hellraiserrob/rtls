import React, { Component } from 'react';

import './Alert.css'

class Alert extends Component {

    render() {

        const {alert, alertHide, alertSnooze} = this.props

        return (

            <div className="alert">
                
                <strong className="text-uppercase">Alert</strong> {alert.text}

                <ul>
                    <li><a onClick={alertHide}>dismiss</a></li>
                    <li><a onClick={alertSnooze}>snooze</a></li>
                </ul>

                
                


            </div>

        );
    }
}

export default Alert;