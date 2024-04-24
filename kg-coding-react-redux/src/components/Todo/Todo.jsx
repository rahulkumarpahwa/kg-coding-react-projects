import InputTodo from "./InputTodo";
import { useState } from "react";
import TodoItem from "./TodoItem";
import Socials from "../Socials";
import BackButton from "../BackButton";

const Todo = () => {
  const [input, setInput] = useState("");
  return (
    <div className="my-4 flex flex-col items-center">
      <BackButton />
      <h2 className="text-center font-bold"> Todo App</h2>
      <InputTodo input={input} setInput={setInput} />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <div>{input}</div>
      <Socials />
    </div>
  );
};

export default Todo;
