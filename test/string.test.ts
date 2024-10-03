import String from "../src/string";

describe("string", () => {
  it("empty string is empty", () => {
    expect(String.isEmpty("")).toBe(true);
  });

  it("non-empty string is not empty", () => {
    expect(String.isEmpty("hello")).toBe(false);
  });

  it("empty string is not empty", () => {
    expect(String.isNotEmpty("")).toBe(false);
  });

  it("non-empty string is not empty", () => {
    expect(String.isNotEmpty("hello")).toBe(true);
  });
});
