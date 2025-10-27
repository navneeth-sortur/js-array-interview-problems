const {
  intersectionOfArrays
} = require("../problems/04-intersection-of-arrays");

describe("Intersection of Two Arrays", () => {
  test("returns elements common to both arrays", () => {
    expect(intersectionOfArrays([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });

  test("returns empty array when no common elements", () => {
    expect(intersectionOfArrays([1, 2], [3, 4])).toEqual([]);
  });

  test("handles duplicates correctly", () => {
    expect(intersectionOfArrays([1, 2, 2, 3], [2, 2, 4])).toEqual([2]);
  });

  test("handles empty arrays", () => {
    expect(intersectionOfArrays([], [1, 2, 3])).toEqual([]);
  });
});
