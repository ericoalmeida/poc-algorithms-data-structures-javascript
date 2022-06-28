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
});
