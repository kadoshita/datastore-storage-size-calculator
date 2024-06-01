import { Property } from ".";

export class GeopointProperty implements Property {
  type = "geopoint" as const;
  name = "";
  size = 16;
  value;
  constructor(name: string, value: { latitude: number; longitude: number }) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + 16;
    this.value = value;
  }
}
