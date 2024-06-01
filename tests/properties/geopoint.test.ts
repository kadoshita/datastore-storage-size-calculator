import { describe, expect, test } from "vitest";
import { GeopointProperty } from "../../src/calculator/properties/geopoint";

describe("geopoint property", () => {
  test("should calculate size", () => {
    const property = new GeopointProperty("test", {
      latitude: 37.7749,
      longitude: 122.4194,
    });
    expect(property.size).toBe(21);
  });
});
