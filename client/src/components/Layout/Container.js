import React from 'react';
import Menu from './Menu'

export default (props) => 
    <div> 
        <h1>Web Skeleton</h1> 
        <Menu /> 
        <div>{props.children}</div> 
    </div>;