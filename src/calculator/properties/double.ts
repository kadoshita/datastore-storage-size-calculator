import { Property } from ".";

export class DoubleProperty implements Property {
  type = "double" as const;
  name = "";
  size = 8;
  value;
  constructor(name: string, value: number) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + 8;
    this.value = value;
  }
}
