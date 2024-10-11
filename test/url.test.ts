import Url from "../src/url";

describe("url", () => {
  it("getHostname", () => {
    expect(Url.getHostname("https://weibo.com/5659598386/Oz369bAC1")).toBe(
      "weibo.com"
    );
  });

  it("isHttp", () => {
    expect(Url.isHttp("http://weibo.com")).toBe(true);
    expect(Url.isHttp("https://weibo.com")).toBe(true);
    expect(Url.isHttp("ftp://weibo.com")).toBe(false);
  });

  it("isHttps", () => {
    expect(Url.isHttps("https://weibo.com")).toBe(true);
    expect(Url.isHttps("http://weibo.com")).toBe(false);
  });
});
