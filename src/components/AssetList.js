import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class AssetList extends Component {
    
    updateCurrentAsset(asset) {
        this.props.updateCurrentAsset(asset);
    }
/*<ListItem
                primaryText={this.props.asset.name}
                leftAvatar={<Avatar src="images/GlassWalls.gif" />}
                onClick={this.updateCurrentAsset.bind(this, this.props.asset)}
            />*/
    render() {
        return (
            <ListItem>
                <ListItemText
                    primary={this.props.asset.name}
                    onClick={this.updateCurrentAsset.bind(this, this.props.asset)}
                />
            </ListItem>
              
        );
    }
}
