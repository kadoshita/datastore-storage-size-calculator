import { describe, expect, test } from "vitest";
import { calculate } from "../src/calculator";

describe("Calculator", () => {
  test.each([
    ["string", { key: "value" }, 10],
    ["integer", { key: 1 }, 12],
    ["double", { key: 1.1 }, 12],
    ["boolean", { key: true }, 5],
    ["null", { key: null }, 5],
    ["timestamp", { key: "2013-05-14T00:01:00.234Z" }, 12],
    ["object", { key: { key1: "value1" } }, 16],
    ["nested object", { key: { key1: { key2: "value2" } } }, 21],
    ["geopoint", { key: { latitude: 90, longitude: 180 } }, 20],
    ["array(integer)", { key: [1, 2, 3] }, 28],
    [
      "array(object)",
      { key: [{ key1: "value1" }, { key2: "value2" }, { key3: "value3" }] },
      40,
    ],
    [
      "multiple types",
      {
        key: "value",
        key2: 1,
        key3: true,
        key4: ["a", "b", "c"],
        key5: { key6: "value6" },
        key7: null,
        key8: "2013-05-14T00:01:00.234Z",
      },
      76,
    ],
  ])("calculate data size (%s)", (title, data, size) => {
    expect(calculate(JSON.stringify(data))).toStrictEqual(
      expect.objectContaining({ size })
    );
  });
});
