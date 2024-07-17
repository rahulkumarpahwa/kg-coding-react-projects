import InputTodo from "./InputTodo";
import { useState } from "react";
import TodoItem from "./TodoItem";
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
      toast.error("Input/Date is Empty!");
    } else {
      const obj = { task: input, date: date };
      // data.push(obj); wrong way
      setData([...data, obj]);
      toast.success("New Todo Created!");
      console.log(data);
      setInput("");
      setDate("");
    }
  };

  const onclick2 = (e) => {
    if (input === "" || date === "") {
      e.preventDefault();
      toast.error("Input/Date is Empty!");
    } else {
      const obj = { task: input, date: date };
      setData([...data, obj]); //sometimes we have to use the state variable  itself or its previous value  while updating it up which can be problematic sometimes when multiple states are handled by react so in that case we will pass a fxn instead of the direct spreading and passing as :
      setData((currentValue) => [...currentValue, obj]); // this type of setting the data is more good practice as compared to directly using the state variable's previous value in updating the state variable.
      // Also here the currentValue argument will automatically take the previous value of the state variable without writing name of it.
      // this will make sure that react when use the state variable 'data' then it will take the updated value of the state variable from where it is getting.
      // all this is known as functional update. go to screenshots to know more about it.
      toast.success("New Todo Created!");
      console.log(data);
      setInput("");
      setDate("");
    }
  };

  const ondelete = (value) => {
    const newData = data.filter((item) => item !== value);
    setData(newData);
    toast.success("Todo Deleted!");
  };

  return (
    <div className="flex flex-col items-center pt-10 pb-40" >
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
      <div>
        {data.length === 0 && "All Todo Finished! \n\n Enjoy your Day!"}
      </div>
      <Toaster />
    </div>
  );
};

export default Todo;
