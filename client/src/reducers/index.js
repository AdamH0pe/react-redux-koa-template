import { combineReducers } from 'redux';
import Reducers from './reducers';
// import Index from '../components/Page/Index';
import * as actions from '../actions/actions';

export const action = { ...actions };
export const reducers = Reducers;
// export const components = { Index };
