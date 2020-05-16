import React from "react";
import { useRecoilState, atom } from "recoil";
import List from "@material-ui/core/List";
import { TodoItem, TodoInput } from "./components";
import Container from "@material-ui/core/Container";

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
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} text={todo.text} />
          ))}
        </List>
        <TodoInput setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
