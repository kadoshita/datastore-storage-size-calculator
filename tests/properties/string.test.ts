import { describe, expect, test } from "vitest";
import { StringProperty } from "../../src/calculator/properties/string";

describe("string property", () => {
  test("should calculate size", () => {
    const property = new StringProperty("test", "hello");
    expect(property.size).toBe(11);
  });
});
