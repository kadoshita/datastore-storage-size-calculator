import { describe, expect, test } from "vitest";
import { TimestampProperty } from "../../src/calculator/properties/timestamp";

describe("timestamp property", () => {
  test("should calculate size", () => {
    const property = new TimestampProperty("test", "2013-05-14T00:01:00.234Z");
    expect(property.size).toBe(13);
  });
});
