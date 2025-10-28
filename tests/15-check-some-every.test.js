const { checkSomeEvery } = require("../problems/15-check-some-every");

describe("Check if All / Some Elements Satisfy Condition", () => {
  test("correctly identifies all and some conditions", () => {
    expect(checkSomeEvery([1, 2, 3, 4], x => x > 2)).toEqual({
      all: false,
      some: true
    });
  });

  test("works when all satisfy condition", () => {
    expect(checkSomeEvery([3, 4, 5], x => x > 2)).toEqual({
      all: true,
      some: true
    });
  });

  test("works when none satisfy condition", () => {
    expect(checkSomeEvery([1, 2], x => x > 5)).toEqual({
      all: false,
      some: false
    });
  });

  test("handles empty array", () => {
    expect(checkSomeEvery([], x => x > 1)).toEqual({ all: true, some: false });
  });
});
