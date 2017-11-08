import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import MessagesLatest from '../Messages/MessagesLatest'

// import './HeaderAuthenticated.css'

class DevicesTable extends Component {


    render() {

        const { devices, toggleFollow, changeCenter } = this.props

        return (

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Device</th>
                        <th>Type</th>
                        <th>Most recent message</th>
                        <th>Status</th>
                        <th>Groups</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) =>
                        <tr key={device.id}>
                            <td className="text-center">

                                <a onClick={(e) => toggleFollow(e, device.id)}>
                                    {!device.isFollowed && <i className="material-icons">&#xE83A;</i>}
                                    {device.isFollowed && <i className="material-icons">&#xE838;</i>}
                                </a>

                            </td>
                            <td>
                                <div>
                                    <Link to={`/device/${device.id}`}>
                                        <strong>
                                            {device.name}
                                        </strong>
                                    </Link>
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
                                {device.groups.map((g, i) => <small key={i}>{g}<br /></small>)}
                                {device.groups.length === 0 && <span>-</span>}
                            </td>
                            <td className="text-center">
                                <a onClick={(e) => changeCenter(e, device.location)}>
                                    <i className="material-icons">&#xE55F;</i>
                                </a>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>

        );
    }
}

export default DevicesTable;
