const { rotateArray } = require("../problems/05-rotate-array");

describe("Rotate Array by K Positions", () => {
  test("rotates array to the right by k steps", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  test("handles k greater than array length", () => {
    expect(rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]);
  });

  test("handles k = 0 (no rotation)", () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test("handles empty array", () => {
    expect(rotateArray([], 3)).toEqual([]);
  });
});
