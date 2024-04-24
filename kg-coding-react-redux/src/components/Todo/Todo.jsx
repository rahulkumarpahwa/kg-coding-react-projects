import InputTodo from "./InputTodo";
import { useState } from "react";
import TodoItem from "./TodoItem";
import Socials from "../Socials";
import BackButton from "../BackButton";

const Todo = () => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([
    { task: "Study React and Redux", date: "2024-04-09" },
  ]);

  const onclick = () => {
    const obj = { task: input, date: date };
    data.push(obj);
    setInput("");
    setDate("");
  };

  const ondelete =()=>{
  };

  return (
    <div className="my-4 flex flex-col items-center">
      <BackButton />
      <h2 className="text-center font-bold"> Todo App</h2>
      <InputTodo
        input={input}
        setInput={setInput}
        date={date}
        setDate={setDate}
        onclick={onclick}
      />
      {data.map((value, index) => (
        <TodoItem key={index} value={value} ondelete={ondelete} />
      ))}
      <Socials />
    </div>
  );
};

export default Todo;
