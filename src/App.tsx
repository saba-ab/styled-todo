import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Container } from "./components/styled/Container.styled";
import { Todo } from "./components/styled/Todo.styled";
import { Input } from "./components/styled/Input.styled";
import { Task, TaskList } from "./components/styled/TaskList.styled";
interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleTodo = (e: KeyboardEvent): void => {
    if (todoInput !== "" && e.key === "Enter") {
      setTodos([todoInput, ...todos]);
      setTodoInput("");
    }
  };

  return (
    <Container>
      <Todo>
        <Input
          value={todoInput}
          placeholder="Create new task"
          onChange={handleInputChange}
          onKeyDown={handleTodo}
        />
        <TaskList>
          {todos.map((todo, index) => (
            <Task key={index}>{todo}</Task>
          ))}
        </TaskList>
      </Todo>
    </Container>
  );
};

export default App;
