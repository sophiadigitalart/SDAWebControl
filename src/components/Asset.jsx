import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
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
        return (
            <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/GlassWalls.gif"
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="images/GlassWalls.gif" alt="GlassWalls" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    
                        vec2 uv = iZoom * gl_FragCoord.xy / RENDERSIZE.xy; 
                    uv.x -= 0.0;
                    uv.y -= 0.0;
                
                    uv.x *= RENDERSIZE.x/ RENDERSIZE.y;	
                    vec4 res = imageFunction(uv);
                    vec4 color = imageFunction(uv);
                    color = (color+1.0)*0.5;	
                    color.w=1.0;
                
                    gl_FragColor = color;		
              
                    <div style={styles.wrapper}>
                        <Chip
                            backgroundColor={purple200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={purple200} backgroundColor={purple900}>
                                GW
                            </Avatar>
                            Glass Walls
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
