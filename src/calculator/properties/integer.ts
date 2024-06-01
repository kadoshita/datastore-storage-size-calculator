import { Property } from ".";

export class IntegerProperty implements Property {
  type = "integer" as const;
  name = "";
  size = 8;
  value;
  constructor(name: string, value: number) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + 8;
    this.value = value;
  }
}
