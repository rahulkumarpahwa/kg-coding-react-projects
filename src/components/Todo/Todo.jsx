import InputTodo from "./InputTodo";
import { useState } from "react";
import TodoItem from "./TodoItem";
import Socials from "../Socials";
import BackButton from "../BackButton";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([
    { task: "Study React and Redux", date: "2024-04-09" },
  ]);

  const onclick = (e) => {
    if (input === "" || date === "") {
      e.preventDefault();
      toast.error("Input/Date is Empty!")
    } else {
      const obj = { task: input, date: date };
      data.push(obj);
      toast.success("New Todo Created!")
      console.log(data);
      setInput("");
      setDate("");
    }
  };

  const ondelete = (value) => {
    const newData = data.filter((item) => item !== value);
    setData(newData);
    toast.success("Todo Deleted!")
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
        <TodoItem key={index} value={value} ondelete={() => ondelete(value)} />
      ))}
      <div>{data.length === 0 && "Todo is Empty!"}</div>
      <Socials />
      <Toaster/>
    </div>
  );
};

export default Todo;
