import { describe, expect, test } from "vitest";
import { EntityProperty } from "../../src/calculator/properties/entity";
import { StringProperty } from "../../src/calculator/properties/string";
import { IntegerProperty } from "../../src/calculator/properties/integer";

describe("entity property", () => {
  test("should calculate size", () => {
    /**
     * {
     *   "test": {
     *     "key": "value"
     *   }
     * }
     */
    const property = new EntityProperty("test", [
      new StringProperty("key", "value"),
    ]);
    expect(property.size).toBe(15);
  });

  test("should calculate size with multiple properties", () => {
    /**
     * {
     *   "test": {
     *     "key1": "value",
     *     "key2": 0
     *   }
     * }
     */
    const property = new EntityProperty("test", [
      new StringProperty("key1", "value"),
      new IntegerProperty("key2", 1),
    ]);
    expect(property.size).toBe(29);
  });

  test("should calculate size with nested entity property", () => {
    /**
     * {
     *   "test": {
     *     "child": {
     *       "key": "value"
     *     }
     *   }
     * }
     */
    const property = new EntityProperty("test", [
      new EntityProperty("child", [new StringProperty("key", "value")]),
    ]);
    expect(property.size).toBe(21);
  });
});
