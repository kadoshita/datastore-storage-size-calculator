import { Property } from ".";

export class BooleanProperty implements Property {
  type = "boolean" as const;
  name = "";
  size = 1;
  value;
  constructor(name: string, value: boolean) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + 1;
    this.value = value;
  }
}
