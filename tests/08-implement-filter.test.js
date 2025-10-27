const { filterCustom } = require("../problems/08-implement-filter");

describe("Implement Array.filter() manually", () => {
  test("filters elements based on callback", () => {
    expect(filterCustom([1, 2, 3, 4, 5], x => x % 2 === 0)).toEqual([2, 4]);
  });

  test("works with string arrays", () => {
    expect(filterCustom(["a", "bb", "ccc"], s => s.length > 1)).toEqual([
      "bb",
      "ccc"
    ]);
  });

  test("returns empty array when no element matches condition", () => {
    expect(filterCustom([1, 3, 5], x => x % 2 === 0)).toEqual([]);
  });

  test("handles empty array", () => {
    expect(filterCustom([], x => x)).toEqual([]);
  });
});
