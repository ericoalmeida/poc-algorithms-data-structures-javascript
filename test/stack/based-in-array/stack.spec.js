import { faker } from '@faker-js/faker';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import Stack from '../../../src/stack/based-in-array/stack';

describe('Stack based in array', () => {
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

    it('Should return undefined when try to get an element of a empty stack', () => {
      const stack = new Stack();

      const expectedUndefinedElement = undefined;
      const expectedStackSize = 0;

      const element = stack.pop();

      expect(element).to.be.equals(expectedUndefinedElement);
      expect(stack.size()).to.be.equals(expectedStackSize);
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

    it('Should return undefined when try to remove an element of a empty stack', () => {
      const stack = new Stack();

      const expectedUndefinedElement = undefined;
      const expectedStackSize = 0;

      const element = stack.pop();

      expect(element).to.be.equals(expectedUndefinedElement);
      expect(stack.size()).to.be.equals(expectedStackSize);
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

  describe('#print', () => {
    it('Should print an empty string when stack is empty', () => {
      const stack = new Stack();

      const expectedStackDataPrinted = '';

      expect(stack.print()).to.be.equals(expectedStackDataPrinted);
    });

    it('Should print all stack elements', () => {
      const stack = new Stack();

      const firstStackElement = faker.random.word();
      const secondStackElement = faker.random.word();

      const expectedStackDataPrinted = `${firstStackElement},${secondStackElement}`;

      stack.push(firstStackElement);
      stack.push(secondStackElement);

      expect(stack.print()).to.be.equals(expectedStackDataPrinted);
    });
  });
});
