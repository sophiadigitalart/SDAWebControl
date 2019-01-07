import React, { Component } from 'react';

export default class Welcome extends Component {
    render() {    
        const {user} = this.props;
        
        return (
           <div className="text-center" >
                
                    {user && (
                       <span> Welcome {user}</span>
                    )}
                    {!user && (
                        <p>log in</p>
                    )}
                
           </div>
        );
    }
}