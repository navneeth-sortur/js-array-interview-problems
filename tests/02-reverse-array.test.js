const { reverseArray } = require("../problems/02-reverse-array");

describe("Reverse Array", () => {
  test("reverses the array elements", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test("works with strings", () => {
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });

  test("handles single-element array", () => {
    expect(reverseArray([10])).toEqual([10]);
  });

  test("handles empty array", () => {
    expect(reverseArray([])).toEqual([]);
  });
});
