import { Property } from ".";

export class NullProperty implements Property {
  type = "null" as const;
  name = "";
  size = 1;
  value = null;
  constructor(name: string) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + 1;
  }
}
