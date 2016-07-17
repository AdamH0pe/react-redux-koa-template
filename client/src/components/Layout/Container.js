import React from 'react';
import Nav from './Nav'

export default (props) => 
    <div> 
        <h1>Web Template</h1> 
        <Nav /> 
        <div>{props.children}</div> 
    </div>;
    