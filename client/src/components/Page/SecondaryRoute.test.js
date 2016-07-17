import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SecondaryRoute from './SecondaryRoute';
import { expect } from 'chai';

describe('SecondaryRoute', () => {
    it('renders ok', () => {
        
      const component = TestUtils.renderIntoDocument(
          <SecondaryRoute />
      );
                  
      expect(component).to.be.ok;     
    });
    
    it('sets text based on queryString', () => {
        
      const location = {
            query: {
                body: 'foobar'   
            } 
       };
        
      const component = TestUtils.renderIntoDocument(
          <SecondaryRoute location={location} />
      );
      
      const target = TestUtils.findRenderedDOMComponentWithClass(component, 'SecondaryRoute')
            
      expect(target.innerHTML).to.contain('foobar');     
    });
});