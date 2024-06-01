import { describe, expect, test } from "vitest";
import { BooleanProperty } from "../../src/calculator/properties/boolean";

describe("boolean property", () => {
  test("should calculate size", () => {
    const property = new BooleanProperty("test", true);
    expect(property.size).toBe(6);
  });
});
