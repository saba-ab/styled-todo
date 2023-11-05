import React, { useState } from "react";
import { Container } from "./components/styled/Container.styled";
import { Todo } from "./components/styled/Todo.styled";
import { Input } from "./components/styled/Input.styled";
import {
  Task,
  TaskList,
  Remove,
  DateFrom,
  Check,
  TodoText,
} from "./components/styled/TaskList.styled";
import checked from "./components/checked.svg";
import { colors, handleTimeConvertion } from "./utils";
import {
  HandleTodo,
  TodoInt,
  InputChange,
} from "./components/InterfaceStorage";
const App: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoInt[]>([]);
  const handleInputChange = ({ e }: InputChange) => {
    setTodoInput(e.target.value);
  };
  const handleTodo = ({ e }: HandleTodo) => {
    if (todoInput !== "" && e.key === "Enter") {
      const newTodo: TodoInt = {
        text: todoInput,
        isChecked: false,
        postedAt: Date.now(),
      };
      setTodos([newTodo, ...todos]);
      setTodoInput("");
    }
  };
  const handleRemove = (indexToRemove: number) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };
  const handleCheck = (indexToCheck: number) => {
    const updatedTodos = [...todos];
    updatedTodos[indexToCheck].isChecked =
      !updatedTodos[indexToCheck].isChecked;
    setTodos(updatedTodos);
  };
  return (
    <Container>
      <Todo>
        <Input
          value={todoInput}
          placeholder="Create new task"
          onChange={(e) => handleInputChange({ e })}
          onKeyDown={(e) => handleTodo({ e })}
        />
        <TaskList>
          {todos.map((todo, index) => (
            <Task key={index}>
              <Check
                onClick={() => handleCheck(index)}
                style={
                  todo.isChecked ? { backgroundImage: `URL(${checked})` } : {}
                }
              />
              <TodoText
                style={todo.isChecked ? { textDecoration: "line-through" } : {}}
              >
                {todo.text}
              </TodoText>
              <DateFrom>{handleTimeConvertion(todo.postedAt)}</DateFrom>{" "}
              <Remove
                color={colors[index % colors.length]}
                onClick={() => handleRemove(index)}
              />
            </Task>
          ))}
        </TaskList>
      </Todo>
    </Container>
  );
};

export default App;
