const { findMax } = require("../problems/01-find-max");

describe("Find Maximum Number in Array", () => {
  test("returns the maximum number in the array", () => {
    expect(findMax([3, 7, 2, 9, 5])).toBe(9);
  });

  test("handles negative numbers", () => {
    expect(findMax([-10, -3, -20, -1])).toBe(-1);
  });

  test("handles array with one element", () => {
    expect(findMax([42])).toBe(42);
  });

  test("returns undefined for empty array", () => {
    expect(findMax([])).toBeUndefined();
  });
});
