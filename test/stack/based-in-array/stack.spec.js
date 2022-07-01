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

  describe('#peek', () => {
    it('Should return an element from stack top', () => {
      const stack = new Stack();

      const expectedWord = faker.lorem.word();

      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(expectedWord);

      expect(stack.peek()).to.be.equal(expectedWord);
    });
  });

  describe('#size', () => {
    it('Should get the size of stack', () => {
      const stack = new Stack();

      const expectedStackSize = 5;

      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());

      expect(stack.size()).to.be.equal(expectedStackSize);
    });
  });

  describe('#pop', () => {
    it('Should return/remove an element from stack top', () => {
      const stack = new Stack();

      const expectedWord = faker.lorem.word();
      const expectedStackSize = 3;

      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(expectedWord);

      expect(stack.pop()).to.be.equal(expectedWord);
      expect(stack.size()).to.be.equal(expectedStackSize);
    });
  });

  describe('#clear', () => {
    it('Should remove all elements from stack', () => {
      const stack = new Stack();

      const expectedStackSize = 0;

      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());
      stack.push(faker.lorem.word());

      stack.clear();

      expect(stack.size()).to.be.equal(expectedStackSize);
    });
  });
});
