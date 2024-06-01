import { describe, expect, test } from "vitest";
import { DoubleProperty } from "../../src/calculator/properties/double";

describe("double property", () => {
  test("should calculate size", () => {
    const property = new DoubleProperty("test", 1.1);
    expect(property.size).toBe(13);
  });
});
