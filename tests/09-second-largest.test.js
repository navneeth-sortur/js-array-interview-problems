const { secondLargest } = require("../problems/09-second-largest");

describe("Find Second Largest Element", () => {
  test("returns the second largest number", () => {
    expect(secondLargest([10, 5, 8, 12, 12])).toBe(10);
  });

  test("handles arrays with negative numbers", () => {
    expect(secondLargest([-3, -1, -7, -2])).toBe(-2);
  });

  test("returns undefined if array has less than two unique numbers", () => {
    expect(secondLargest([5, 5, 5])).toBeUndefined();
  });

  test("handles single element array", () => {
    expect(secondLargest([42])).toBeUndefined();
  });
});
