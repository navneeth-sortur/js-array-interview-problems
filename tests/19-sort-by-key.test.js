const { sortByKey } = require("../problems/19-sort-by-key");

describe("Sort Array of Objects by Key", () => {
  test("sorts ascending by key", () => {
    const data = [{ age: 30 }, { age: 20 }, { age: 40 }];
    expect(sortByKey(data, "age")).toEqual([
      { age: 20 },
      { age: 30 },
      { age: 40 }
    ]);
  });

  test("sorts descending by key", () => {
    const data = [{ age: 10 }, { age: 40 }, { age: 25 }];
    expect(sortByKey(data, "age", true)).toEqual([
      { age: 40 },
      { age: 25 },
      { age: 10 }
    ]);
  });

  test("does not mutate original array", () => {
    const data = [{ age: 2 }, { age: 1 }];
    const sorted = sortByKey(data, "age");
    expect(data).toEqual([{ age: 2 }, { age: 1 }]);
    expect(sorted).toEqual([{ age: 1 }, { age: 2 }]);
  });
});
