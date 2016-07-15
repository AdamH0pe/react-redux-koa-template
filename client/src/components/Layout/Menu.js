import React from 'react';
import { Link } from 'react-router';

export default () => 
<nav>
    <Link activeClassName="selected" to="/">Home </Link>
    <Link activeClassName="selected" to="/about">About </Link>
    <Link activeClassName="selected" to={{pathname: '/about', query: {body: 'Hello World'} }}>About Hello World </Link>  
    <Link activeClassName="selected" to="/about/contact">Contact</Link>
</nav>;