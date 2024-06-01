import { describe, expect, test } from "vitest";
import { ArrayProperty } from "../../src/calculator/properties/array";
import { StringProperty } from "../../src/calculator/properties/string";

describe("array property", () => {
  test("should calculate size", () => {
    const property = new ArrayProperty("test", [
      new StringProperty("", "value1"),
      new StringProperty("", "value2"),
    ]);
    expect(property.size).toBe(19);
  });
});
