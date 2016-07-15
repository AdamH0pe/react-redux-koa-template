import React from 'react';

export default class Contact extends React.Component { 
    render() {
        return  <div> Contact - 
                    <p>{ this.props.params && 
                            this.props.params.message }</p> 
                </div>;
    }
}