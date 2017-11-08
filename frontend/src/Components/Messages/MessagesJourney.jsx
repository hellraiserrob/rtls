import React, { Component } from 'react';

import { formatDate } from '../../Utils/dates'

class MessagesJourney extends Component {


    render() {

        const { messages, setPosition } = this.props

        return (

            <div className="p20 bg-grey">

                <h2>Position log</h2>

                <div className="table-wrapper">

                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((item, index) => <tr key={index}>
                                <td>{formatDate(item.date)}</td>
                                <td>{item.address}</td>
                                <td>
                                    <a onClick={(e) => setPosition(e, item.location)}>
                                        <i className="material-icons">&#xE55F;</i>
                                    </a>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>

                </div>

                <a>View History</a>




            </div>


        );
    }
}

export default MessagesJourney;
