const { flattenArray } = require("../problems/16-flatten-array");

describe("Flatten a Nested Array", () => {
  test("flattens nested arrays correctly", () => {
    expect(flattenArray([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("works with deeply nested arrays", () => {
    expect(flattenArray([[1], [[2]], [[[3]]]])).toEqual([1, 2, 3]);
  });

  test("handles empty arrays", () => {
    expect(flattenArray([])).toEqual([]);
  });

  test("returns the same array if already flat", () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
