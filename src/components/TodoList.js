import React from "react";
import { TodoItem } from "./TodoItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  todoItemsWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  noTodoItems: {
    alignSelf: "center",
  },
});

export const TodoList = ({ todos }) => {
  const { todoItemsWrapper, noTodoItems } = useStyles();
  return (
    <Grid className={todoItemsWrapper}>
      {todos.length === 0 ? (
        <Typography variant="h6" className={noTodoItems}>
          There are no items yet <span role="img">😢</span>
        </Typography>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} text={todo.text} />)
      )}
    </Grid>
  );
};
