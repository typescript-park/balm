const Url = {
  /**
   * 获取 URL 的主机名。
   * @param {string} url - 要解析的 URL。
   * @returns {string} 主机名。
   */
  getHostname(url: string): string {
    return new URL(url).hostname;
  },

  /**
   * 判断 URL 是否是 HTTP 或 HTTPS 协议。
   * @param {string} url - 要判断的 URL。
   * @returns {boolean} 如果是 HTTP 或 HTTPS 协议，返回 true，否则返回 false。
   */
  isHttp(url: string): boolean {
    return url.startsWith("http://") || url.startsWith("https://");
  },

  /**
   * 判断 URL 是否是 HTTPS 协议。
   * @param {string} url - 要判断的 URL。
   * @returns {boolean} 如果是 HTTPS 协议，返回 true，否则返回 false。
   */
  isHttps(url: string): boolean {
    return url.startsWith("https://");
  },
};

export default Url;
