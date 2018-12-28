import React, { Component } from 'react';
// not needed import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Asset from './components/Asset';
import AssetList from './components/AssetList';
import WebSocketComp from './components/WebSocketComp';

const defaultAsset = {
  _id: 0,
  name: "AcidAtTheDisco",
  text: "AcidAtTheDisco{]"
}
export default class App extends Component {
  displayName = App.name
  constructor(props) {
      super(props);
      this.state = { 
        assets: [],
        currentAsset: defaultAsset
      };
      this.updateCurrentAsset = this.updateCurrentAsset.bind(this);
  }
  componentWillMount() {
      this.setState({
          assets: [{
              _id: 1,
              name: "GlassWalls",
              text: "vec2 uv = iZoom * gl_FragCoord.xy / RENDERSIZE.xy;"
          },
          {
              _id: 2,
              name: "Hx",
              text: "vec2 uv = gl_FragCoord.xy / RENDERSIZE.xy;"
          },
          {
              _id: 3,
              name: "330",
              text: "vec2 uv = gl_FragCoord.xy / RENDERSIZE.xy;"
          }
          ]
      });
      //window.socket = new ws('ws://127.0.0.1:8088');
      //if (window.socket) window.socket.send('{"params" :[{"name" : "1","value" :"1"}]}');
  }
 
  renderAssets() {
      return this.state.assets.map((asset) => (
          <AssetList key={asset._id} asset={asset} updateCurrentAsset={this.updateCurrentAsset} />
      ));

  }
  updateCurrentAsset(asset) {
    this.setState({
      currentAsset: asset
    })
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
                      <div className="col s12 m7"><Asset asset={this.state.currentAsset} /></div>
                      <div className="col s12 m5">
                          <Divider />
                          <List>
                              {this.renderAssets()}
                          </List>
                          <Divider />
                      </div>
                  </div>
                  <RaisedButton label="yeah" />
                  <WebSocketComp asset={this.state.currentAsset} />
              </div>
          </MuiThemeProvider>
                  
      );
  }
}
