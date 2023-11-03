import React from "react";
import "./App.css";
import { Container } from "./components/styled/Container.styled";
import { Todo } from "./components/styled/Todo.styled";
import { Input } from "./components/styled/Input.styled";
import { TaskList } from "./components/styled/TaskList.styled";
function App() {
  return (
    <Container>
      <Todo>
        <Input placeholder="Create new task"></Input>
        <TaskList>aba</TaskList>
        <TaskList>deli</TaskList>
        <TaskList>delao</TaskList>
      </Todo>
    </Container>
  );
}

export default App;
