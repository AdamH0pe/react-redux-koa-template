import React from 'react';
import TestUtils from 'react-addons-test-utils';
import About from './About';
import { expect } from 'chai';

describe('About', () => {
    it('renders ok', () => {
        
      const component = TestUtils.renderIntoDocument(
          <About />
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
          <About location={location} />
      );
      
      const target = TestUtils.findRenderedDOMComponentWithClass(component, 'about')
            
      expect(target.innerHTML).to.contain('foobar');     
    });
});