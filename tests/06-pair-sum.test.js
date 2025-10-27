const { pairSum } = require("../problems/06-pair-sum");

describe("Pair Sum - Find All Unique Pairs That Sum to Target", () => {
  test("returns all unique pairs that sum to target", () => {
    expect(pairSum([1, 2, 3, 4, 5, 6], 7)).toEqual([
      [3, 4],
      [2, 5],
      [1, 6]
    ]);
  });

  test("handles array with negative numbers", () => {
    expect(pairSum([-1, 0, 1, 2, -2, 3], 1)).toEqual([
      [0, 1],
      [-1, 2],
      [-2, 3]
    ]);
  });

  test("returns empty array if no pairs sum to target", () => {
    expect(pairSum([1, 2, 3], 10)).toEqual([]);
  });

  test("handles empty array", () => {
    expect(pairSum([], 5)).toEqual([]);
  });
});
