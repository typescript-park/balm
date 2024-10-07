import Url from "../src/url";

describe("url", () => {
  it("getHostname", () => {
    expect(Url.getHostname("https://weibo.com/5659598386/Oz369bAC1")).toBe(
      "weibo.com"
    );
  });
});
