const { filterByCondition } = require("../problems/12-filter-by-condition");

describe("Filter Objects Based on Condition", () => {
  test("filters objects correctly", () => {
    const data = [{ age: 20 }, { age: 25 }, { age: 30 }];
    const result = filterByCondition(data, obj => obj.age > 21);
    expect(result).toEqual([{ age: 25 }, { age: 30 }]);
  });

  test("returns empty array when no match", () => {
    const data = [{ age: 10 }, { age: 15 }];
    expect(filterByCondition(data, obj => obj.age > 30)).toEqual([]);
  });

  test("handles empty array", () => {
    expect(filterByCondition([], obj => obj.active)).toEqual([]);
  });
});
