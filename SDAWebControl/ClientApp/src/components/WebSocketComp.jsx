// from https://medium.com/practo-engineering/websockets-in-react-the-component-way-368730334eef
import React, { Component } from 'react';

export default class WebSocketComp extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }
    
    componentDidMount() {
        // this is an "echo" websocket service for testing pusposes
        //this.connection = new WebSocket('wss://echo.websocket.org');
        this.connection = new WebSocket('wss://127.0.0.1');
        //this.connection = new WebSocket('wss://test.northeurope.cloudapp.azure.com/');
        // listen to onmessage event
        this.connection.onmessage = evt => {
            // add the new message to state
            this.setState({
                messages: this.state.messages.concat([evt.data])
            });
        };

        // for testing: sending a message to the echo service every 2 seconds, 
        // the service sends it right back
        setInterval(_ => {
            this.connection.send(Math.random());
        }, 2000);
    }
    render() {
        // render the messages from state:
        return (
            <ul>{this.state.messages.slice(-5).map((msg, idx) => <li key={'msg-' + idx}>{msg}</li>)}</ul>
        );
    }
   
}
