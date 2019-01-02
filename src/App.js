import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Welcome from './components/Welcome';
import Asset from './components/Asset';
import AssetList from './components/AssetList';
import WebSocketComp from './components/WebSocketComp';

const defaultAsset = {
  _id: 0,
  name: "default",
  description: "void main(void) \{vec2 uv = gl_FragCoord.xy / iResolution.xy;fragColor = vec4(1.,1.,0.,1.);\}"
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
        user: "Bruce",
        assets: [{
              _id: 1,
              name: "GlassWalls",
              description: "vec2 uv = iZoom * gl_FragCoord.xy / RENDERSIZE.xy;"
          },
          {
              _id: 2,
              name: "AcidAtTheDisco",
              description: "// https://www.shadertoy.com/view/4sfXRB \
              void main(void)\
              {\
                vec2 uv = iZoom * gl_FragCoord.xy / iResolution.xy;\
                float time = iTime;\
                float depth = sin(uv.y*12.0+sin(time)*1.5+1.0+sin(uv.x*3.0+time*1.2))*cos(uv.y*2.0+time)+sin((uv.x*3.0+time));\
                float texey = (uv.x-0.5);\
                float xband = sin(sqrt(uv.y/uv.y)*16.0/(depth)+time*3.0);\
                float final = (\
                  sin(texey/abs(depth)*32.0+time*16.0+sin(uv.y*uv.x*32.0*sin(depth*3.0)))*(depth)*xband\
                );\
                fragColor = vec4(0.,(-final*sin(time)*2.0),(final),1.0)*1.5;\
              }"
          },
          {
              _id: 3,
              name: "330",
              description: "vec2 uv = gl_FragCoord.xy / RENDERSIZE.xy;"
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
    console.log("updateCurrentAsset:" +JSON.stringify(asset) );
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
                  <Welcome user={this.state.user} />
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
                  <WebSocketComp asset={this.state.currentAsset} />
              </div>
          </MuiThemeProvider>
                  
      );
  }
}
