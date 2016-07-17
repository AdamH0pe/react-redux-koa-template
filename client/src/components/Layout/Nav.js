import React from 'react';
import { Link } from 'react-router';

export default () => 
<nav>
    <Link activeClassName="selected" to="/">Index </Link>  
    <Link activeClassName="selected" to={{pathname: '/secondary-route', query: {body: 'hello world'} }}> Secondary Route</Link>
</nav>;