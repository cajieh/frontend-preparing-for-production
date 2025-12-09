import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("should shuffle the indexes of an array", () => {
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffledArray = shuffle(originalArray);

    // Check that the shuffled array has the same length
    expect(shuffledArray).to.have.lengthOf(originalArray.length);

    // Check that all original elements are still present
    originalArray.forEach((element) => {
      expect(shuffledArray).to.include(element);
    });

    // Check that the array was actually shuffled (not always in same order)
    // Note: There's a very small chance this could fail if shuffle returns
    // the exact same order, but it's statistically very unlikely
    const isShuffled = shuffledArray.some(
      (element, index) => element !== originalArray[index]
    );
    expect(isShuffled).to.be.true;
  });

  it("should not modify the original array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const originalCopy = [...originalArray];
    shuffle(originalArray);

    expect(originalArray).to.deep.equal(originalCopy);
  });

  it("should handle an empty array", () => {
    const emptyArray = [];
    const result = shuffle(emptyArray);

    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(0);
  });

  it("should handle a single element array", () => {
    const singleElementArray = [42];
    const result = shuffle(singleElementArray);

    expect(result).to.deep.equal([42]);
  });
});
