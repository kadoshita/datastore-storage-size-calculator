import {
  Button,
  Checkbox,
  Grid,
  JsonInput,
  TextInput,
  Text,
} from "@mantine/core";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import classes from "./index.module.css";
import { KeyProperty } from "../../calculator/properties/key";
import { calculate } from "../../calculator";

export function Calculator() {
  const [namespace, setNamespace] = useState("");
  const [kind, setKind] = useState("");
  const [key, setKey] = useState("");
  const [hasAncestor, setHasAncestor] = useState(false);
  const [ancestorKind, setAncestorKind] = useState("");
  const [ancestorKey, setAncestorKey] = useState("");
  const [entity, setEntity] = useState("");
  const [keySize, setKeySize] = useState(0);
  const [entitySize, setEntitySize] = useState(0);
  const [result, setResult] = useState("");

  const handleInputNamespace: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setNamespace(value);
  };
  const handleInputKind: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKind(value);
  };
  const handleInputKey: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKey(value);
  };
  const handleCheckHasAncestor: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    setHasAncestor(checked);
  };
  const handleInputAncestorKind: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setAncestorKind(value);
  };
  const handleInputAncestorKey: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setAncestorKey(value);
  };
  const handleInputEntity = (value: string) => {
    setEntity(value);
  };
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    try {
      const keyProperty = new KeyProperty(
        {
          kind,
          id: key,
          ancestor: hasAncestor
            ? {
                kind: ancestorKind,
                id: ancestorKey,
              }
            : undefined,
        },
        false,
        namespace
      );

      const result = calculate(entity);
      setKeySize(keyProperty.size);
      setEntitySize(result.size);
      setResult(JSON.stringify(result.properties, null, 2));
    } catch (e) {
      setResult((e as Error).toString());
    }
  };

  return (
    <div className={classes.container}>
      <TextInput label="Namespace" onChange={handleInputNamespace}></TextInput>
      <TextInput label="Kind" onChange={handleInputKind}></TextInput>
      <TextInput label="Key" onChange={handleInputKey}></TextInput>
      <Checkbox
        label="Has ancestor"
        checked={hasAncestor}
        onChange={handleCheckHasAncestor}
      />
      {hasAncestor && (
        <TextInput
          label="Ancestor Kind"
          onChange={handleInputAncestorKind}
        ></TextInput>
      )}
      {hasAncestor && (
        <TextInput
          label="Ancestor Key"
          onChange={handleInputAncestorKey}
        ></TextInput>
      )}
      <Grid>
        <Grid.Col span={6}>
          <JsonInput
            label="Entity"
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={20}
            maxRows={20}
            onChange={handleInputEntity}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <JsonInput
            label="Result"
            readOnly
            formatOnBlur
            autosize
            minRows={20}
            maxRows={20}
            value={result}
          ></JsonInput>
        </Grid.Col>
      </Grid>
      <Text>Key Size: {keySize} Byte</Text>
      <Text>Entity Size: {entitySize} Byte</Text>
      <Text>Total Size: {keySize + entitySize} Byte</Text>
      <Button onClick={handleSubmit} className={classes.submitButton}>
        Calculate
      </Button>
    </div>
  );
}
