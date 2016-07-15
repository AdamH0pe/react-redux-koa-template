import { combineReducers } from 'redux';
import Reducers from './reducers';
import Home from '../components/Page/Home';
import * as actions from '../actions/actions';

export const action = { ...actions };
export const reducers = Reducers;
export const components = { Home };
