import {
  Property,
  BooleanProperty,
  NullProperty,
  TimestampProperty,
  StringProperty,
  IntegerProperty,
  DoubleProperty,
  ArrayProperty,
  BlobProperty,
  GeopointProperty,
  EntityProperty,
} from "./properties";

function isRFC3339(value: string): boolean {
  const pattern = new RegExp(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?Z$/
  );
  return pattern.test(value);
}

function parse(data: any, key = ""): Property {
  if (typeof data === "boolean") {
    return new BooleanProperty(key, data);
  }
  if (data === null) {
    return new NullProperty(key);
  }
  if (typeof data === "string") {
    if (isRFC3339(data)) {
      return new TimestampProperty(key, data);
    }
    return new StringProperty(key, data);
  }
  if (typeof data === "number") {
    if (Number.isInteger(data)) {
      return new IntegerProperty(key, data);
    }
    return new DoubleProperty(key, data);
  }
  if (Array.isArray(data)) {
    return new ArrayProperty(
      key,
      data.map((v) => parse(v))
    );
  }

  if (typeof data === "object") {
    if (data instanceof Blob) {
      return new BlobProperty(key, data);
    }
    if (
      "latitude" in data &&
      typeof data.latitude === "number" &&
      "longitude" in data &&
      typeof data.longitude === "number"
    ) {
      return new GeopointProperty(key, data);
    }
  }

  const keys = Object.keys(data);

  const properties = keys.map((childKey) => {
    const childValue = data[childKey];
    return parse(childValue, childKey);
  });

  return new EntityProperty(key, properties);
}

export function calculate(json: string) {
  const data = JSON.parse(json);

  const parsedProperties = parse(data);

  return {
    size: parsedProperties.size,
    properties: parsedProperties,
  };
}
