import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Storage } from "../storage";

export const TodoInput = ({ setTodos }) => {
  const [text, setText] = useState("");
  return (
    <div className="form-wrapper">
      <TextField
        label="Enter todo text..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button
        color="primary"
        onClick={() => {
          const newTodos = Storage.set({ text });
          setTodos(newTodos);
          setText("");
        }}
      >
        Save
      </Button>
    </div>
  );
};
