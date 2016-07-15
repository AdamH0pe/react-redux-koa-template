import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routeReducer, syncReduxAndRouter } from 'redux-simple-router';
import { reducers as state } from './reducers';

//  REACT SIMPLE ROUTER 
//
//  const rootReducer = combineReducers({state, routeReducer});

//  OTHER MIDDLEWARE TO CONSIDER
//
//  redux thunk 

const createStoreWithMiddleware = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore); // ADD CHROME DEV TOOLS

const store = createStoreWithMiddleware(state);

//  REACT SIMPLE ROUTER 
//
//  store.sync = (history) => syncReduxAndRouter(history, store);

export default store;