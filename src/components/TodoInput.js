import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const getNextId = (todosState) => {
  let id = 0;
  todosState.forEach((t) => {
    if (t.id > id) {
      id = t.id;
    }
  });
  return id + 1;
};

export const TodoInput = ({ setTodos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <TextField
        label="Enter todo text..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button
        color="primary"
        onClick={() =>
          setTodos((prevState) => [
            ...prevState,
            { id: getNextId(prevState), text },
          ])
        }
      >
        Save
      </Button>
    </div>
  );
};
