import React from 'react';
import { Router,  Route, Link, IndexRoute, Redirect, browserHistory } from 'react-router';
import { createHistory } from 'history';

//  STATELESS COMPONENTS 
//
import Container from './components/Layout/Container';
import Menu from './components/Layout/Menu';

//  CLASS COMPONENTS 
//
import About from './components/Page/About';
import Contact from './components/Page/Contact';
import Home from './components/Page/Home';

export const Routes = <Router history={ browserHistory }>
                            <Route path="/" component={ Container }>
                                <IndexRoute component={ Home }></IndexRoute>
                                <Route path="about" component={ About }>
                                    <Route path="contact(/:message)" component={ Contact }></Route> // wrapping brackets make message optional
                                </Route>
                                <Redirect from="about-us" to="about"></Redirect>
                                <Route path="*" component={ Home }></Route>
                            </Route>
                        </Router>;