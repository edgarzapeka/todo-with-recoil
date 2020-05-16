import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const TodoItem = ({ text }) => {
  return (
    <ListItem>
      <ListItemText primary={text} />
    </ListItem>
  );
};
