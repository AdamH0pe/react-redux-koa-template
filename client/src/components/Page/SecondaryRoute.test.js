import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Index from './Index';
import { expect } from 'chai';
import store from './../../store';

describe('Home', () => {
    it('renders ok', () => {
          
        const component = TestUtils.renderIntoDocument(
            <Index store={store} />
        );
                    
        expect(component).to.be.ok;     
    });
});