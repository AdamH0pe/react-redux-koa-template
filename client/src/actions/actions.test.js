import React from 'react';
import TestUtils from 'react-addons-test-utils';
import * as Actions from './actions';
import Chai, { expect } from 'chai';
import spies from 'chai-spies';

describe('Actions', () => {
    
    Chai.use(spies);
    
    //  use spy for functions that dispatch an action creator e.g async
    //
    //  const dispatch = Chai.spy();
    
    it('toggle active', () => {
        
        const state = false;                
        const action = Actions.toggleActive(state);
        
        expect(action.type).to.equal('TOGGLE_ACTIVE');
        expect(action.active).to.be.true;
    });
});