import React, { Component } from 'react';

import './Alert.css'

class Alert extends Component {

    render() {

        const {alert, alertHide, alertSnooze} = this.props

        return (

            <div className="alert">
                
                <strong className="text-uppercase">Alert</strong> {alert.text}

                <ul>
                    <li>
                        <a onClick={alertSnooze} title="Snooze alert">
                            <i className="material-icons">&#xE7F8;</i>
                            
                        </a>
                    </li>
                    <li><a onClick={alertHide}><i className="material-icons"  title="Close alert">&#xE5CD;</i></a></li>
                </ul>

                
                


            </div>

        );
    }
}

export default Alert;