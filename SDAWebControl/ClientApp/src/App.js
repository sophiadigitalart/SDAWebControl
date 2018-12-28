import React, { Component } from 'react';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';

// not needed import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Asset from './components/Asset';
import AssetList from './components/AssetList';
import WebSocketComp from './components/WebSocketComp';

export default class App extends Component {
    displayName = App.name
    constructor(props) {
        super(props);
        this.state = { assets: [] };
    }
    componentWillMount() {
        this.setState({
            assets: [{
                _id: 1,
                name: "Glass Wallz"
            },
            {
                _id: 2,
                name: "Hx"
            },
            {
                _id: 3,
                name: "330"
            }
            ]
        });
        //window.socket = new ws('ws://127.0.0.1:8088');
        //if (window.socket) window.socket.send('{"params" :[{"name" : "1","value" :"1"}]}');
    }
    /* getAssets() {
        return [
            {
                _id: 1,
                name: "Glass Wallz"
            },
            {
                _id: 2,
                name: "Hx"
            },
            {
                _id: 3,
                name: "330"
            }
        ];
    } 
    renderAssets() {
        return this.getAssets().map((asset) => (
            <AssetList key={asset._id} asset={asset} />
        ));

    } */
    renderAssets() {
        return this.state.assets.map((asset) => (
            <AssetList key={asset._id} asset={asset} />
        ));

    }
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar
                        title="Assets"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}
                    />
                    <div className="row">
                        <div className="col s12 m7"><Asset /></div>
                        <div className="col s12 m5">
                            <Divider />
                            <List>
                                {this.renderAssets()}
                            </List>
                            <Divider />
                        </div>
                    </div>
                    <RaisedButton label="yeah" />
                    <WebSocketComp  />
                </div>
            </MuiThemeProvider>
                    //<WebSocketComp subsribeUrl={subsribeUrl} ArrayOfChannels={ArrayOfChannels} {...others}/>
                //<Layout>
                //    <Route exact path='/' component={Home} />
                //    <Route path='/counter' component={Counter} />
                //    <Route path='/fetchdata' component={FetchData} />
                //</Layout>
        );
    }
}
