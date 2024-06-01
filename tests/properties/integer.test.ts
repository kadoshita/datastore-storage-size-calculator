import { describe, expect, test } from "vitest";
import { IntegerProperty } from "../../src/calculator/properties/integer";

describe("integer property", () => {
  test("should calculate size", () => {
    const property = new IntegerProperty("test", 1);
    expect(property.size).toBe(13);
  });
});
