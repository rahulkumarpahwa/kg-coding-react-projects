import InputTodo from "./InputTodo";
import { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import Socials from "../Socials";
import BackButton from "../BackButton";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [data, setData] = useState([
    { task: "Study React and Redux", date: "2024-04-09" },
  ]);

  const inputElement = useRef();
  const dateElement = useRef();

  const onclick = (e) => {
    if (inputElement.current.value === "" || dateElement.current.value === "") {
      e.preventDefault();
      toast.error("Input/Date is Empty!");
    } else {
      const obj = {
        task: inputElement.current.value,
        date: dateElement.current.value,
      };
      setData([...data, obj]);
      toast.success("New Todo Created!");
      console.log(data);
      inputElement.current.value = "";
      dateElement.current.value = "";

    }
  };

  const ondelete = (value) => {
    const newData = data.filter((item) => item !== value);
    setData(newData);
    toast.success("Todo Deleted!");
  };

  return (
    <div className="my-4 flex flex-col items-center">
      <BackButton />
      <h2 className="text-center font-bold"> Todo App</h2>
      <InputTodo
        inputRef={inputElement}
        dateRef={dateElement}
        onclick={onclick}
      />
      {data.map((value, index) => (
        <TodoItem key={index} value={value} ondelete={() => ondelete(value)} />
      ))}
      <div>
        {data.length === 0 && "All Todo Finished! \n\n Enjoy your Day!"}
      </div>
      <Socials />
      <Toaster />
    </div>
  );
};

export default Todo;
