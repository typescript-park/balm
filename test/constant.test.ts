import Constant from "../src/constant";

describe("constant", () => {
  it("empty", () => {
    expect(Constant.EMPTY === "").toBe(true);
  });

  it("space", () => {
    expect(Constant.SPACE === " ").toBe(true);
  });

  it("dot", () => {
    expect(Constant.DOT === ".").toBe(true);
  });

  it("undefined", () => {
    expect(Constant.UNDEFINED === undefined).toBe(true);
  });

  it("null", () => {
    expect(Constant.NULL === null).toBe(true);
  });
});
