import React from "react";
import { useRecoilState, atom } from "recoil";
import { TodoItem, TodoInput } from "./components";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Storage } from "./storage";

const generateInitialTodoState = (todos) =>
  atom({
    key: "todoState",
    default: todos,
  });

function App() {
  const [todos, setTodos] = useRecoilState(
    generateInitialTodoState(Storage.get())
  );

  return (
    <div className="wrapper">
      <div className="content">
        <Paper elevation={4} className="todo-list">
          <Typography variant="h3" align="center" className="todo-title">
            Todo List:
          </Typography>
          {todos.map((todo) => (
            <TodoItem key={todo.id} text={todo.text} />
          ))}
          <TodoInput setTodos={setTodos} />
        </Paper>
      </div>
    </div>
  );
}

export default App;
