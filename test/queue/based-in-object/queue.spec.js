import { faker } from '@faker-js/faker';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import Queue from '../../../src/queue/based-in-object/queue';

describe('Queue based in object', () => {
  describe('#isEmpty', () => {
    it('Should crete an empty queue', () => {
      const queue = new Queue();

      expect(queue.isEmpty()).to.be.true;
    });
  });

  describe('#enqueue', () => {
    it('Should be add an element into the queue', () => {
      const queue = new Queue();

      const expectedElement = faker.random.word();

      queue.enqueue(expectedElement);

      expect(queue.isEmpty()).to.be.false;
      expect(queue.peek()).to.be.equals(expectedElement);
    });
  });

  describe('#peek', () => {
    it('Should return an element from queue front', () => {
      const queue = new Queue();

      const expectedElement = faker.random.word();

      queue.enqueue(expectedElement);
      queue.enqueue(faker.random.word());
      queue.enqueue(faker.random.word());

      expect(queue.isEmpty()).to.be.false;
      expect(queue.peek()).to.be.equals(expectedElement);
    });

    it('Should return undefined when queue is empty', () => {
      const queue = new Queue();

      let expectedElement;

      expect(queue.isEmpty()).to.be.true;
      expect(queue.peek()).to.be.equals(expectedElement);
    });
  });

  describe('#size', () => {
    it('Should be return a queue size', () => {
      const queue = new Queue();

      const expectedQueueSize = 2;

      queue.enqueue(faker.random.word());
      queue.enqueue(faker.random.word());

      expect(queue.isEmpty()).to.be.false;
      expect(queue.size()).to.be.equals(expectedQueueSize);
    });
  });

  describe('#dequeue', () => {
    it('Should be remove an element from queue', () => {
      const queue = new Queue();

      const expectedQueueSize = 2;
      const expectedElement = faker.random.word();

      queue.enqueue(expectedElement);
      queue.enqueue(faker.random.word());
      queue.enqueue(faker.random.word());

      expect(queue.isEmpty()).to.be.false;
      expect(queue.dequeue()).to.be.equals(expectedElement);
      expect(queue.size()).to.be.equals(expectedQueueSize);
    });
  });

  describe('#clear', () => {
    it('Should be clear elements from queue', () => {
      const queue = new Queue();

      const expectedQueueSize = 0;

      queue.enqueue(faker.random.word());
      queue.enqueue(faker.random.word());

      queue.clear();

      expect(queue.isEmpty()).to.be.true;
      expect(queue.size()).to.be.equals(expectedQueueSize);
    });
  });

  describe('#print', () => {
    it('Should be print elements from queue', () => {
      const queue = new Queue();

      const expectedFirstElement = faker.random.word();
      const expectedSecondElement = faker.random.word();
      const expectedPrintedElements = `${expectedFirstElement},${expectedSecondElement}`;

      queue.enqueue(expectedFirstElement);
      queue.enqueue(expectedSecondElement);

      expect(queue.isEmpty()).to.be.false;
      expect(queue.print()).to.be.equals(expectedPrintedElements);
    });

    it('Should not be print elements when queue is empty', () => {
      const queue = new Queue();

      const expectedPrintedElements = '';

      expect(queue.isEmpty()).to.be.true;
      expect(queue.print()).to.be.equals(expectedPrintedElements);
    });
  });
});
