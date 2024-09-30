import Type from "../src/type";

describe("type name", () => {
  it("string", async () => {
    expect(Type.STRING === typeof "").toBe(true);
  });

  it("number", async () => {
    expect(Type.NUMBER === typeof 1).toBe(true);
  });

  it("boolean", async () => {
    expect(Type.BOOLEAN === typeof true).toBe(true);
  });

  it("undefined", async () => {
    expect(Type.UNDEFINED === typeof undefined).toBe(true);
  });

  it("object", async () => {
    expect(Type.OBJECT === typeof {}).toBe(true);
  });
});

describe("type check", () => {
  it("string", async () => {
    expect(Type.isString("") && !Type.isString(1) && !Type.isString(true)).toBe(
      true
    );
  });

  it("number", async () => {
    expect(Type.isNumber(1) && Type.isNumber(2.0) && !Type.isNumber(NaN)).toBe(
      true
    );
  });

  it("boolean", async () => {
    expect(Type.isBoolean(true)).toBe(true);
  });

  it("undefined", async () => {
    expect(Type.isUndefined(undefined)).toBe(true);
  });

  it("object", async () => {
    expect(
      Type.isObject({}) && !Type.isObject(null) && !Type.isObject([])
    ).toBe(true);
  });

  it("null", async () => {
    expect(Type.isNull(null)).toBe(true);
  });

  it("array", async () => {
    expect(Type.isArray([]) && !Type.isArray({}) && !Type.isArray(null)).toBe(
      true
    );
  });
});
