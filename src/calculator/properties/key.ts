import { Property } from ".";

export type Path = {
  kind: string;
  id: string | number;
  ancestor?: Path;
};

export class KeyProperty implements Property {
  type = "key" as const;
  name = "id";
  size;
  value;
  constructor(path: Path, isAncestor = false, namespace?: string) {
    this.size = path.kind.length + 1;
    this.size += typeof path.id === "string" ? path.id.length + 1 : 8;
    if (path.ancestor) {
      this.size += new KeyProperty(path.ancestor, true).size;
    }
    if (namespace) {
      this.size += namespace.length + 1;
    }
    if (!isAncestor) {
      this.size += 16;
    }
    this.value = path;
  }
}
