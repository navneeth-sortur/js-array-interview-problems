const {
  totalInventoryValue
} = require("../problems/20-transform-and-aggregate");

describe("Transform and Aggregate Using map() + reduce()", () => {
  test("calculates total inventory value correctly", () => {
    const products = [
      { price: 10, qty: 2 },
      { price: 5, qty: 4 }
    ];
    expect(totalInventoryValue(products)).toBe(40);
  });

  test("returns 0 for empty input", () => {
    expect(totalInventoryValue([])).toBe(0);
  });

  test("handles missing quantity or price as 0", () => {
    const products = [{ price: 10 }, { qty: 3 }];
    const value = products
      .map(p => (p.price || 0) * (p.qty || 0))
      .reduce((sum, val) => sum + val, 0);
    expect(totalInventoryValue(products)).toBe(value);
  });
});
