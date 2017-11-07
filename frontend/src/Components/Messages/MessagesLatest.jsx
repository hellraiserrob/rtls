import React, { Component } from 'react';

class MessagesLatest extends Component {

    render() {

        const { message } = this.props

        return (

            <div>
                {message.text}
            </div>

        );
    }
}

export default MessagesLatest;
