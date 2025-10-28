const { groupByProperty } = require("../problems/14-group-by-property");

describe("Group Objects by Property", () => {
  test("groups objects correctly", () => {
    const data = [
      { dept: "IT", name: "Alice" },
      { dept: "HR", name: "Bob" },
      { dept: "IT", name: "Charlie" }
    ];
    const expected = {
      IT: [
        { dept: "IT", name: "Alice" },
        { dept: "IT", name: "Charlie" }
      ],
      HR: [{ dept: "HR", name: "Bob" }]
    };
    expect(groupByProperty(data, "dept")).toEqual(expected);
  });

  test("returns empty object for empty input", () => {
    expect(groupByProperty([], "dept")).toEqual({});
  });
});
