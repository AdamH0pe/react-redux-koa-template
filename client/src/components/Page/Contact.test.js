import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Contact from './Contact';
import { expect } from 'chai';

describe('Contact', () => {
    it('renders ok', () => {
        
      const component = TestUtils.renderIntoDocument(
          <Contact />
      );
                  
      expect(component).to.be.ok;     
    });
});