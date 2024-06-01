export * from "./array";
export * from "./blob";
export * from "./boolean";
export * from "./double";
export * from "./entity";
export * from "./geopoint";
export * from "./integer";
export * from "./key";
export * from "./null";
export * from "./string";
export * from "./timestamp";

export interface Property {
  name: string;
  type: string;
  size: number;
  value: any;
}
