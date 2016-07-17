import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Index from './Index';
import { expect } from 'chai';
import { store } from './../../store';

describe('Index', () => {
    it('renders ok', () => {
          
        const component = TestUtils.renderIntoDocument(
            <Index store={store} />
        );
                    
        expect(component).to.be.ok;     
    });
});