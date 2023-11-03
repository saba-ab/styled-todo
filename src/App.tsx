import React, { useState, ChangeEvent, KeyboardEvent } from "react";
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
import moment from "moment";
import checked from "./components/checked.svg";

const App: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoInt[]>([]);
  interface TodoInt {
    text: string;
    isChecked: boolean;
    postedAt: number;
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleTodo = (e: KeyboardEvent): void => {
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
  const handleTimeConvertion = (time: number): string => {
    return moment(time).fromNow();
  };
  const color1 = "#FF5733";
  const color2 = "#33FF57";
  const color3 = "#3357FF";
  const color4 = "#FF33A1";
  const color5 = "#A133FF";

  const colors = [color1, color2, color3, color4, color5];

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
          onChange={handleInputChange}
          onKeyDown={handleTodo}
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
