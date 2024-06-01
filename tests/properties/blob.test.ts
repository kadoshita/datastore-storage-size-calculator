import { describe, expect, test } from "vitest";
import { BlobProperty } from "../../src/calculator/properties/blob";

describe("blob property", () => {
  test("should calculate size", () => {
    const property = new BlobProperty("test", new Blob([]));
    expect(property.size).toBe(5);
  });

  test("should calculate size", () => {
    const property = new BlobProperty("test", new Blob(["a", "b", "c", "d"]));
    expect(property.size).toBe(9);
  });
});
