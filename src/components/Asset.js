import React, { Component } from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import { purple200, purple900 } from 'material-ui/styles/colors';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import { FaBeer } from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'

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
    constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.save = this.save.bind(this)
		this.send = this.send.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
		this.updateCode = this.updateCode.bind(this)
	}
    updateCode(newCode) {
        console.log("updateCode ASSET:" + newCode);
        this.setState({
            code: newCode,
        });
    
        //this.connection.send("{\"event\":\"frag\",\"message\":\"" + this.state.code + "\"}");
    }
    componentDidUpdate() {
		var textArea
		if(this.state.editing) {
			textArea = this._newCode
			textArea.focus()
			textArea.select()
		}

    }
    shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.children !== nextProps.children || this.state !== nextState
		)
	}

	edit() {
		this.setState({
			editing: true
		})
    }
    save(e) {
		e.preventDefault()
		this.props.onChange(this._newCode.value, this.props.index)
		this.setState({
			editing: false
		})
	}
    send(e) {
        console.log("send:" + e);
        this.setState({
            code: e,
        });
		this.props.onChange(e)	
	}
	renderForm() {
        var options = {
            lineNumbers: true,
        };
        const asset = this.props.asset;
		return (
			<div className="asset" style={this.style}>
				<form onSubmit={this.save}>
					<textarea ref={input => this._newCode = input}
							  defaultValue={this.props.children}/>
					<button id="save"><FaSave /></button>
                    <CodeMirror value={asset.description} onChange={this.send} options={options} />
				</form>
			</div>
		)
    }

    renderDisplay() {
        
        const asset = this.props.asset;
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={asset.name} subtitle={asset._id} />}
                >
                    <img src="images/GlassWalls.gif" alt="GlassWalls" />
                </CardMedia>
                
                <CardText>
                    {/*asset.description*/}
    		        <p>{this.props.children}</p>
				<span>
					<button onClick={this.edit} id="edit"><FaBeer /></button>
					
				</span>     
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
                </CardActions>
                
            </Card>
        );
    }
    render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}
}
