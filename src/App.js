import React from "react";
import { useRecoilState, atom } from "recoil";
import List from "@material-ui/core/List";
import { TodoItem, TodoInput } from "./components";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const todosState = atom({
  key: "todoState",
  default: [
    {
      id: 1,
      text: "hello",
    },
    {
      id: 2,
      text: "hi",
    },
    {
      id: 3,
      text: "bonjour",
    },
  ],
});

function App() {
  const [todos, setTodos] = useRecoilState(todosState);

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
