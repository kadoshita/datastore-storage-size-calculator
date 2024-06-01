import { describe, expect, test } from "vitest";
import { KeyProperty } from "../../src/calculator/properties/key";

describe("string property", () => {
  test("should calculate size number id", () => {
    const property = new KeyProperty({
      kind: "Task",
      id: 5730082031140864,
    });
    expect(property.size).toBe(29);
  });

  test("should calculate size number id namespace is empty", () => {
    const property = new KeyProperty(
      {
        kind: "Task",
        id: 5730082031140864,
      },
      false,
      ""
    );
    expect(property.size).toBe(29);
  });

  test("should calculate size string id", () => {
    const property = new KeyProperty({
      kind: "Task",
      id: "my_task_id",
    });
    expect(property.size).toBe(32);
  });

  test("should calculate size with ancestor", () => {
    const property = new KeyProperty({
      kind: "Task",
      id: 5629499534213120,
      ancestor: {
        kind: "TaskList",
        id: 5654313976201216,
      },
    });
    expect(property.size).toBe(46);
  });

  test("should calculate size with ancestor and namespace", () => {
    const property = new KeyProperty(
      {
        kind: "Task",
        id: 5629499534213120,
        ancestor: {
          kind: "TaskList",
          id: 5654313976201216,
        },
      },
      false,
      "my_name_space"
    );
    expect(property.size).toBe(60);
  });
});
