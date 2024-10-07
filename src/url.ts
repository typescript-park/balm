const Url = {
  /**
   * 获取 URL 的主机名。
   * @param {string} url - 要解析的 URL。
   * @returns {string} 主机名。
   */
  getHostname(url: string): string {
    return new URL(url).hostname;
  },
};

export default Url;
