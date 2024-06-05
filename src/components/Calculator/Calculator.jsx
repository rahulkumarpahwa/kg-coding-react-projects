import { useState } from "react";
import BackButton from "../BackButton";

const Calculator = () => {
  const [number, setNumber] = useState("");

  const buttons = [
    {
      name: "+",
      value: "+",
    },
    {
      name: "-",
      value: "-",
    },
    {
      name: "*",
      value: "*",
    },
    {
      name: "/",
      value: "/",
    },
    {
      name: "1",
      value: "1",
    },
    {
      name: "2",
      value: "2",
    },
    {
      name: "3",
      value: "3",
    },
    {
      name: "4",
      value: "4",
    },
    {
      name: "5",
      value: "5",
    },
    {
      name: "6",
      value: "6",
    },
    {
      name: "7",
      value: "7",
    },
    {
      name: "8",
      value: "8",
    },
    {
      name: "9",
      value: "9",
    },
    {
      name: "0",
      value: "0",
    },
  ];

  return (
    <div className="flex items-center justify-center font-bold my-10 relative">
      <BackButton />
      <div className="m-auto border-2 flex flex-col w-72 border-slate-500 p-8  rounded-lg">
        <input
          className="border-2 border-white bg-slate-400 w-30 py-2 rounded-lg px-2 text-white outline-slate-500"
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <div className="flex items-center justify-center flex-wrap gap-1 my-1">
          <div>
            <button
              className="w-10 h-10 m-2 rounded-lg font-bold text-center text-white bg-slate-400  hover:text-slate-800"
              onClick={() => {
                let ans = eval(number);
                console.log(ans)
                setNumber(ans);
              }}
            >
              c
            </button>
          </div>
          {buttons.map((value) => (
            <button
              className="w-10 h-10 m-2 rounded-lg font-bold text-center text-white bg-slate-400  hover:text-slate-800"
              key={value}
              onClick={() => {
                setNumber(number + value.value);
              }}
            >
              {value.name}
            </button>
          ))}
          <div>
            <button
              className="h-10 m-2 w-44 rounded-lg font-bold text-center text-white bg-slate-400  hover:text-slate-800"
              onClick={() => {
                setNumber("");
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
