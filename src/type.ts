const Type = {
  /**
   * 字符串类型。
   */
  STRING: "string",
  /**
   * 数字类型。
   */
  NUMBER: "number",
  /**
   * 布尔类型。
   */
  BOOLEAN: "boolean",
  /**
   * 未定义类型。
   */
  UNDEFINED: "undefined",
  /**
   * 对象类型。
   */
  OBJECT: "object",

  /**
   * 检查值是否为字符串类型。
   * @param {unknown} value 要检查的值。
   * @returns {boolean} 如果值为字符串类型，返回 true，否则返回 false。
   */
  isString(value: unknown): value is string {
    return typeof value === this.STRING;
  },

  /**
   * 检查值是否为数字类型，并且是有限数字。
   * @param {unknown} value 要检查的值。
   * @returns {boolean} 如果值为数字类型，返回 true，否则返回 false。
   */
  isNumber(value: unknown): value is number {
    return typeof value === this.NUMBER && Number.isFinite(value);
  },

  /**
   * 检查值是否为布尔类型。
   * @param {unknown} value 要检查的值。
   * @returns {boolean} 如果值为布尔类型，返回 true，否则返回 false。
   */
  isBoolean(value: unknown): value is boolean {
    return typeof value === this.BOOLEAN;
  },

  /**
   * 检查值是否为未定义类型。
   * @param {unknown} value 要检查的值。
   * @returns {boolean} 如果值为未定义类型，返回 true，否则返回 false。
   */
  isUndefined(value: unknown): value is undefined {
    return typeof value === this.UNDEFINED;
  },

  /**
   * 检查值是否为对象类型，并且不是 null 或数组。
   * @param {unknown} value 要检查的值。
   * @returns {boolean} 如果值为对象类型，返回 true，否则返回 false。
   */
  isObject(value: unknown): value is object {
    return (
      typeof value === this.OBJECT &&
      !this.isNull(value) &&
      !this.isArray(value)
    );
  },

  /**
   * 检查值是否为 null。
   * @param {unknown} value 要检查的值。
   * @returns {boolean} 如果值为 null，返回 true，否则返回 false。
   */
  isNull(value: unknown): value is null {
    return value === null;
  },

  /**
   * 检查值是否为数组类型。
   * @param {unknown} value 要检查的值。
   * @returns {boolean} 如果值为数组类型，返回 true，否则返回 false。
   */
  isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
  },
};

export default Type;
