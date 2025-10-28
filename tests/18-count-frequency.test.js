const { countFrequency } = require("../problems/18-count-frequency");

describe("Count Frequency of Elements", () => {
  test("counts occurrences correctly", () => {
    expect(countFrequency(["apple", "banana", "apple"])).toEqual({
      apple: 2,
      banana: 1
    });
  });

  test("works with numbers", () => {
    expect(countFrequency([1, 1, 2, 3, 3, 3])).toEqual({ 1: 2, 2: 1, 3: 3 });
  });

  test("handles empty array", () => {
    expect(countFrequency([])).toEqual({});
  });
});
