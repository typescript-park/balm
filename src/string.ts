import Constant from "./constant";

const String = {
  /**
   * 检查字符串是否为空。
   * @param {string} value 要检查的字符串。
   * @returns {boolean} 如果字符串为空，返回 true，否则返回 false。
   */
  isEmpty(value: string): boolean {
    return value === Constant.EMPTY;
  },

  /**
   * 检查字符串是否不为空。
   * @param {string} value 要检查的字符串。
   * @returns {boolean} 如果字符串为空，返回 true，否则返回 false。
   */
  isNotEmpty(value: string): boolean {
    return !this.isEmpty(value);
  },
};

export default String;
