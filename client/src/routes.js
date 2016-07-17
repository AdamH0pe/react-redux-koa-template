import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';

//  STATELESS COMPONENTS 
//
import Container from './components/Layout/Container';
import Nav from './components/Layout/Nav';

//  CLASS COMPONENTS 
//
import Index from './components/Page/Index';
import SecondaryRoute from './components/Page/SecondaryRoute';

export const Routes =   <Router history={ browserHistory }>
                            <Route path="/" component={ Container }>
                                <IndexRoute component={ Index }></IndexRoute>
                                <Route path="secondary-route" component={ SecondaryRoute }>
                                </Route>
                                <Redirect from="second-route" to="secondary-route"></Redirect>
                                <Route path="*" component={ Index }></Route>
                            </Route>
                        </Router>;