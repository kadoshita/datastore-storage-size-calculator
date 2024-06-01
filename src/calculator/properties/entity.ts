import { Property } from ".";

export class EntityProperty implements Property {
  type = "entity" as const;
  name = "";
  size;
  value;
  constructor(name: string, values: Property[]) {
    if (values.some((value) => value.name === "")) {
      throw new Error("Child property must have a name");
    }
    this.name = name;
    this.size =
      (name === "" ? 0 : name.length + 1) +
      values.reduce((acc, prop) => acc + prop.size, 0);
    this.value = values;
  }
}
