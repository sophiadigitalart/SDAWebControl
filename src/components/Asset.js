import React, { Component } from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import { purple200, purple900 } from 'material-ui/styles/colors';

const styles = {
    chip: { margin: 4 },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    button: {
        margin: 12
    }
};

export default class Asset extends Component {

    render() {
        const asset = this.props.asset;
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={asset.name} subtitle={asset._id} />}
                >
                    <img src="images/GlassWalls.gif" alt="GlassWalls" />
                </CardMedia>
                
                <CardText>
                    {asset.text}
                        		             
                    <div style={styles.wrapper}>
                        <Chip
                            backgroundColor={purple200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={purple200} backgroundColor={purple900}>
                            {asset._id}
                            </Avatar>
                            {asset.name}
                        </Chip>
                    </div>
                </CardText>
                <CardActions>
                    <RaisedButton label="Action1" />
                    <RaisedButton label="Action2" />
                </CardActions>
            </Card>
        );
    }
}
