import { useState } from "react";
import { TodoContext } from "../../Context/todoContext";
import InputTodo from "../Todo with Context/InputTodo";
import TodoContainer from "./TodoContainer";
import toast, { Toaster } from "react-hot-toast";
import Error from "./Error";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      task: "Learn React and Redux",
      date: "2024-06-31",
    },
  ]);

  const onclick = (input, date) => {
    setTodoList((currentValue) => [
      ...currentValue,
      { task: input, date: date },
    ]);
    toast.success("Todo Added!");
  };

  const ondelete = (todoItem) => {
    const newTodoList = todoList.filter((value) => value != todoItem);
    setTodoList(newTodoList);
    toast.success("Todo Deleted!");
  };

  return (
    <TodoContext.Provider value={{ todoList, onclick, ondelete }}>
      <div className="flex flex-col justify-center items-center my-10">
        <h2>Todo With Context API</h2>
        <InputTodo />
        <TodoContainer />
        <Error />
        <Toaster />
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
