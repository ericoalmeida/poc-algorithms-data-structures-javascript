import { faker } from '@faker-js/faker';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import Stack from '../../../src/stack/based-in-object/stack';

describe('Stack based in object', () => {
  describe('#isEmpty', () => {
    it('Should create an empty stack', () => {
      const stack = new Stack();

      expect(stack.isEmpty()).to.be.true;
    });
  });

  describe('#push', () => {
    it('Should add an element into the stack', () => {
      const stack = new Stack();

      stack.push(faker.random.word());

      expect(stack.isEmpty()).to.be.false;
    });
  });

  describe('#peek', () => {
    it('Should return the element of stack top', () => {
      const stack = new Stack();

      const expectedStackTopElement = faker.random.word();

      stack.push(faker.random.word());
      stack.push(faker.random.word());
      stack.push(faker.random.word());
      stack.push(expectedStackTopElement);

      expect(stack.peek()).to.be.equals(expectedStackTopElement);
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
    it('Should return the size of stack', () => {
      const stack = new Stack();

      const expectedSizeStack = 3;

      stack.push(faker.random.word());
      stack.push(faker.random.word());
      stack.push(faker.random.word());

      expect(stack.size()).to.be.equals(expectedSizeStack);
    });
  });

  describe('#pop', () => {
    it('Should return/remove an element of stack', () => {
      const stack = new Stack();

      const expectedStackTopElement = faker.random.word();
      const expectedStackSize = 3;

      stack.push(faker.random.word());
      stack.push(faker.random.word());
      stack.push(faker.random.word());
      stack.push(expectedStackTopElement);

      const element = stack.pop();

      expect(element).to.be.equals(expectedStackTopElement);
      expect(stack.size()).to.be.equals(expectedStackSize);
    });

    it('Should return undefined when try to remove an element of  a empty stack', () => {
      const stack = new Stack();

      const expectedUndefinedElement = undefined;
      const expectedStackSize = 0;

      const element = stack.pop();

      expect(element).to.be.equals(expectedUndefinedElement);
      expect(stack.size()).to.be.equals(expectedStackSize);
    });
  });

  describe('#clear', () => {
    it('Should clear all stack elements', () => {
      const stack = new Stack();

      const expectedStackSize = 0;

      stack.push(faker.random.word());
      stack.push(faker.random.word());
      stack.push(faker.random.word());

      stack.clear();

      expect(stack.isEmpty()).to.be.true;
      expect(stack.size()).to.be.equals(expectedStackSize);
    });
  });

  describe('#print', () => {
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
