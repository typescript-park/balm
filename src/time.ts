const Time = {
  /**
   * 休眠。
   * @param {number} ms 休眠时间，单位为毫秒。
   */
  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), ms);
    });
  },
};

export default Time;
