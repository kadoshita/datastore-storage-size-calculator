import { Property } from ".";

export class ArrayProperty implements Property {
  type = "array" as const;
  name = "";
  size;
  value;
  constructor(name: string, value: Property[]) {
    this.name = name;
    this.size =
      (name === "" ? 0 : name.length + 1) +
      value.reduce((acc, prop) => acc + prop.size, 0);
    this.value = value;
  }
}
