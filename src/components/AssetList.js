import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default class AssetList extends Component {
    
    updateCurrentAsset(asset) {
        this.props.updateCurrentAsset(asset);
    }

    render() {
        return (
            <ListItem
                primaryText={this.props.asset.name}
                leftAvatar={<Avatar src="images/GlassWalls.gif" />}
                onClick={this.updateCurrentAsset.bind(this, this.props.asset)}
            />
        );
    }
}
