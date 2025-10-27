const { chunkArray } = require("../problems/10-chunk-array");

describe("Chunk Array into Smaller Arrays", () => {
  test("splits array into groups of given size", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("works when array length is divisible by chunk size", () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  test("returns empty array when size <= 0", () => {
    expect(chunkArray([1, 2, 3], 0)).toEqual([]);
  });

  test("handles empty array input", () => {
    expect(chunkArray([], 3)).toEqual([]);
  });
});
