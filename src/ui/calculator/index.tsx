import { Button, JsonInput } from "@mantine/core";
import classes from "./index.module.css";
import { MouseEventHandler, useState } from "react";

export function Calculator() {
  const [data, setData] = useState("");

  const handleInput = (value: string) => {
    setData(value);
  };
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <JsonInput
        label="Your data"
        validationError="Invalid JSON"
        formatOnBlur
        autosize
        minRows={20}
        onChange={handleInput}
      />
      <Button onClick={handleSubmit} className={classes.submitButton}>
        Calculate
      </Button>
    </div>
  );
}
