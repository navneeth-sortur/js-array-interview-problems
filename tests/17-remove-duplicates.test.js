const { removeDuplicates } = require("../problems/17-remove-duplicates");

describe("Remove Duplicates from Array", () => {
  test("removes duplicates correctly", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });

  test("handles string arrays", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  test("returns empty array if input is empty", () => {
    expect(removeDuplicates([])).toEqual([]);
  });
});
