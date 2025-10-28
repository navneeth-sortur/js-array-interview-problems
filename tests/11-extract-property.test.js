const { extractProperty } = require("../problems/11-extract-property");

describe("Extract Specific Property from Array of Objects", () => {
  test("returns array of property values", () => {
    const data = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
    expect(extractProperty(data, "name")).toEqual(["Alice", "Bob", "Charlie"]);
  });

  test("returns undefined for missing keys", () => {
    const data = [{ name: "Alice" }, {}];
    expect(extractProperty(data, "name")).toEqual(["Alice", undefined]);
  });

  test("returns empty array for empty input", () => {
    expect(extractProperty([], "id")).toEqual([]);
  });
});
