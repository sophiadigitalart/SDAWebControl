// from https://medium.com/practo-engineering/websockets-in-react-the-component-way-368730334eef
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class WebSocketComp extends Component {
    constructor(props) {
        super(props);
        console.log("WebSocketComp ctor:" + JSON.stringify(props) );
        this.state = { 
            messages: []
        };//
    }
    wsSend(asset) {
        this.connection.send("{\"event\":\"frag\",\"message\":\"" + asset.description + "\"}");
    }
    
    shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.children !== nextProps.children || this.state !== nextState
		)
	}
    componentDidMount() {
        this.connection = new WebSocket('ws://localhost:8088');
        //this.connection = new WebSocket('wss://.northeurope.cloudapp.azure.com/');
        // listen to onmessage event
        this.connection.onmessage = evt => {
            // add the new message to state
            this.setState({
                messages: this.state.messages.concat([evt.data])
            });
        };
        // for testing: sending a message to the echo service every 2 seconds, 
        // setInterval(_ => {
        //     this.connection.send(Math.random());
        // }, 20000);
    }
    render() {        
        
        return (
            <div>
                <RaisedButton label="Send" onClick={this.wsSend.bind(this,this.props.asset)} />
                <ul>{this.state.messages.slice(-5).map((msg, idx) => <li key={'msg-' + idx}>{msg}</li>)}</ul>
            </div>
        );
    }
   
}
