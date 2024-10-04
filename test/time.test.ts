import Time from "../src/time";

describe("time", () => {
  it("sleep", async () => {
    const start = Date.now();
    await Time.sleep(1200);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
