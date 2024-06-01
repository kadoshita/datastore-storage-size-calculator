import { Property } from ".";

export class BlobProperty implements Property {
  type = "blob" as const;
  name = "";
  size;
  value;
  constructor(name: string, value: Blob) {
    this.name = name;
    this.size = (name === "" ? 0 : name.length + 1) + value.size;
    this.value = value;
  }
}
