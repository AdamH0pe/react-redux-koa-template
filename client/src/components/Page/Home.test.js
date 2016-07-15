import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Home from './Home';
import { expect } from 'chai';
import store from './../../store';

describe('Home', () => {
    it('renders ok', () => {
          
        const component = TestUtils.renderIntoDocument(
            <Home store={store} />
        );
                    
        expect(component).to.be.ok;     
    });
});