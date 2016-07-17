import React from 'react';

export default class SecondaryRoute extends React.Component { 
    
    render() {
        return  <div className="SecondaryRoute"> 
                    <h3>About</h3> 
                    <p>{ this.props.location && 
                            <span> query string - {this.props.location.query.body} </span> }</p>
                    <div>{ this.props.children }</div> 
                </div>;     
    }
}