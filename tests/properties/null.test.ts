import { describe, expect, test } from "vitest";
import { NullProperty } from "../../src/calculator/properties/null";

describe("null property", () => {
  test("should calculate size", () => {
    const property = new NullProperty('test');
    expect(property.size).toBe(6);
  });
});
