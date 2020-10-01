import React from "react";
import { useRecoilState, atom } from "recoil";
import { TodoInput } from "./components";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Storage } from "./storage";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { TodoList } from "./components/TodoList";

const useStyles = makeStyles({
  wrapperHeader: {
    display: "flex",
    flexDirection: "column",
  },
  clearAllButton: {
    width: "fit-content",
    alignSelf: "flex-end",
  },
});

const generateInitialTodoState = (todos) =>
  atom({
    key: "todoState",
    default: todos,
  });

function App() {
  const [todos, setTodos] = useRecoilState(
    generateInitialTodoState(Storage.get())
  );
  const { wrapperHeader, clearAllButton } = useStyles();

  return (
    <div className="wrapper">
      <div className="content">
        <Paper elevation={4} className="todo-list">
          <Grid className={wrapperHeader}>
            <Typography variant="h3" align="center" className="todo-title">
              Todo List:
            </Typography>
            {todos.length > 0 && (
              <Button
                className={clearAllButton}
                color="primary"
                onClick={() => {
                  Storage.clear();
                  setTodos(Storage.get());
                }}
              >
                Clear all
              </Button>
            )}
          </Grid>
          <TodoList todos={todos} setTodos={setTodos}/>
          <TodoInput setTodos={setTodos} />
        </Paper>
      </div>
    </div>
  );
}

export default App;
