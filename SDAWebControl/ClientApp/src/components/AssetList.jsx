import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default class AssetList extends Component {
    
    render() {
        return (
            <ListItem
                primaryText={this.props.asset.name}
                leftAvatar={<Avatar src="images/GlassWalls.gif" />}
            />
        );
    }
}
