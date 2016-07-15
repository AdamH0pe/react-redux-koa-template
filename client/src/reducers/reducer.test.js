import React from 'react';
import TestUtils from 'react-addons-test-utils';
import freeze from 'deep-freeze';
import * as Actions from './../actions/actions';
import reducer from './reducers';
import Chai, { expect } from 'chai';
import spies from 'chai-spies';

describe('Reducers', () => {
    
    it('toggle active reducer', () => {
        const state = false;
        const action = Actions.toggleActive(state);
        
        const currentState = reducer({
            active: false    
        });
        freeze(currentState);
        
        const nextState = reducer(currentState, action);
        
        expect(nextState.active).to.be.true;
    });
});