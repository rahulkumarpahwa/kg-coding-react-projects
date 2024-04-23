import InputTodo from "./InputTodo";
import { useState } from "react";
import TodoItem from "./TodoItem";
import Socials from "../Socials";
import BackButton from "../BackButton";

const Todo = () => {
  const [input, setInput] = useState("hello");
  return (
    <div className="my-4 flex flex-col items-center">
      <BackButton />
      <h2 className="text-center font-bold"> Todo App</h2>
      <InputTodo data={input} setInput={setInput} />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Socials />
    </div>
  );
};

export default Todo;
