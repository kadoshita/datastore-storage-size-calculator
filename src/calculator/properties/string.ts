import { Property } from ".";

export class StringProperty implements Property {
  type = "string" as const;
  name = "";
  size;
  value;
  constructor(name: string, value: string) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + value.length + 1;
    this.value = value;
  }
}
