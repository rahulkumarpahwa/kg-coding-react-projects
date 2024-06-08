import { useState } from "react";
import { TodoContext } from "../../Context/todoContext";
import InputTodo from "../Todo with Context/InputTodo";
import TodoContainer from "./TodoContainer";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      task: "New game",
      date: "2024/06/31",
    },
  ]);

  const onclick = (input, date) => {
    setTodoList((currentValue) => [
      ...currentValue,
      { task: input, date: date },
    ]);
  };

  const ondelete = (todoItem) => {
    const newTodoList = todoList.filter((value) => value != todoItem);
    setTodoList(newTodoList);
  };

  return (
    <TodoContext.Provider value={{ todoList, onclick, ondelete }}>
      <div>
        <InputTodo />
        <TodoContainer />
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
