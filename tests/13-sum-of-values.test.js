const { sumOfValues } = require("../problems/13-sum-of-values");

describe("Sum Values in Array of Objects", () => {
  test("sums numeric values correctly", () => {
    const data = [{ price: 10 }, { price: 20 }, { price: 30 }];
    expect(sumOfValues(data, "price")).toBe(60);
  });

  test("handles missing keys as 0", () => {
    const data = [{ price: 10 }, {}];
    expect(sumOfValues(data, "price")).toBe(10);
  });

  test("returns 0 for empty array", () => {
    expect(sumOfValues([], "price")).toBe(0);
  });
});
