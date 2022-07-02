import { faker } from '@faker-js/faker';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import Stack from '../../../src/stack/based-in-object/stack';

describe('Stack', () => {
  describe('#isEmpty', () => {
    it('Should create an empty stack', () => {
      const stack = new Stack();

      expect(stack.isEmpty()).to.be.true;
    });
  });

  describe('#push', () => {
    it('Should create an empty stack', () => {
      const stack = new Stack();

      stack.push(faker.random.word());

      expect(stack.isEmpty()).to.be.false;
    });
  });
});
