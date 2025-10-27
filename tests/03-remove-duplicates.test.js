const { removeDuplicates } = require("../problems/03-remove-duplicates");

describe("Remove Duplicates from Array", () => {
  test("removes duplicate numbers", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns the same array when no duplicates exist", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles string arrays", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  test("handles empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });
});
