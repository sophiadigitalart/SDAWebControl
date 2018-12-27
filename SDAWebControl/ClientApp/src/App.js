import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

// not needed import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Asset from './components/Asset';
import AssetList from './components/AssetList';

export default class App extends Component {
    displayName = App.name

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
                        <div className="col s12 m5"><AssetList /></div>
                    </div>
                    <RaisedButton label="yeah" />
                </div>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetchdata' component={FetchData} />
                </Layout>
            </MuiThemeProvider>
        );
    }
}
