import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import MessagesLatest from '../Messages/MessagesLatest'

// import './HeaderAuthenticated.css'

class DevicesTable extends Component {


    render() {

        const { devices, toggleFollow } = this.props

        return (

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
                    {devices.map((device) =>
                        <tr key={device.id}>
                            <td>
                                <div>
                                    <strong>
                                        <a onClick={(e) => toggleFollow(e, device.id)}>

                                            {device.name} 

                                            {!device.isFollowed && <i className="material-icons">&#xE83A;</i>}
                                            {device.isFollowed && <i className="material-icons">&#xE838;</i>}

                                        </a>

                                    </strong>
                                </div>
                                {device.serialNumber}
                            </td>
                            <td>{device.type}</td>
                            <td>
                                {device.log.length > 0 && <MessagesLatest message={device.log[0]} />}
                                {!device.log.length && <div>No messages</div>}
                            </td>
                            <td>{device.status}</td>
                            <td>
                                <a href="/view">
                                    <i className="material-icons">&#xE55F;</i>
                                </a>
                                <Link to={`/device/${device.id}`}>
                                    <i className="material-icons">&#xE5C8;</i>
                                </Link>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>

        );
    }
}

export default DevicesTable;
