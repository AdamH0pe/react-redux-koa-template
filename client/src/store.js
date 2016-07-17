import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';

export const store = createStore(
    reducers,
    window.devToolsExtension ? window.devToolsExtension() : f => f // ADD CHROME DEV TOOLS
);