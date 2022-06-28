import { faker } from '@faker-js/faker';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import Stack from '../../../src/stack/based-in-array/stack';

describe('Stack', () => {
  describe('#isEmpty', () => {
    it('Should create an empty stack', () => {
      const stack = new Stack();

      expect(stack.isEmpty()).to.be.true;
    });
  });

  describe('#push', () => {
    it('Should add an element into the stack', () => {
      const stack = new Stack();

      stack.push(faker.lorem.word());

      expect(stack.isEmpty()).to.be.false;
    });
  });
});
