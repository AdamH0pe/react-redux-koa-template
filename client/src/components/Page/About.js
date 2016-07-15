import React from 'react';

export default class About extends React.Component { 
    
    render() {
        return  <div className="about"> 
                    <h3>About</h3> 
                    <p>{ this.props.location && 
                            <span> query string says .. {this.props.location.query.body} </span> }</p>
                    <div>{ this.props.children }</div> 
                </div>;     
    }
}