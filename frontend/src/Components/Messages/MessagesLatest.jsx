import React, { Component } from 'react';

import { formatDate } from '../../Utils/dates'

class MessagesLatest extends Component {

    render() {

        const { message } = this.props

        return (

            <div>
                {formatDate(message.date)}
            </div>

        );
    }
}

export default MessagesLatest;
