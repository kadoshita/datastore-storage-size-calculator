import { Property } from ".";

export class TimestampProperty implements Property {
  type = "timestamp" as const;
  name = "";
  size = 8;
  value;
  constructor(name: string, value: string) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + 8;
    this.value = value;
  }
}
