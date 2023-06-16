const { expect } = require("chai");
const { it, describe } = require("mocha");

const { bubbleSort } = require("../../src/bubble-sort/bubble-sort");
const { compare } = require("../../src/bubble-sort/utils");

describe("Bubble sort", () => {
  it("Should sort array numbers", () => {
    const list = [1, 5, 3, 2, 4];

    bubbleSort(list, compare);

    const expectedList = [1, 2, 3, 4, 5];

    expect(list).to.be.deep.equal(expectedList);
  });
});
