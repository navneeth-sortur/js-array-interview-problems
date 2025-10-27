const { mapCustom } = require("../problems/07-implement-map");

describe("Implement Array.map() manually", () => {
  test("applies callback to each element", () => {
    expect(mapCustom([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
  });

  test("works with strings", () => {
    expect(mapCustom(["a", "b"], s => s.toUpperCase())).toEqual(["A", "B"]);
  });

  test("passes index and array arguments correctly", () => {
    expect(mapCustom([10, 20], (val, i, arr) => val + i + arr.length)).toEqual([
      12, 23
    ]);
  });

  test("returns empty array for empty input", () => {
    expect(mapCustom([], x => x)).toEqual([]);
  });
});
