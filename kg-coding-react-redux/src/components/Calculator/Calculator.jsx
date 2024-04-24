import { useState } from "react";
import BackButton from "../BackButton";
import Socials from "../Socials";

const Calculator = () => {
  const [number, setNumber] = useState();

  const buttons = [
    {
      name: "c",
      value: "",
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
    <div className="flex items-center justify-center font-bold my-20">
      <BackButton />
      <div className="m-auto border-2 flex flex-col w-72 border-slate-500 p-10  rounded-lg">
        <input
          className="border-2 border-white bg-slate-400 w-30 py-2 rounded-lg px-2 text-white outline-slate-500"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <div className="">
          {buttons.map((value, index) => (
            <button
              className="w-10 h-10 m-2 rounded-lg font-bold text-center p-4 text-white bg-slate-400 hover:bg-white hover:text-slate-600"
              key={index}
            >
              {value.name}
            </button>
          ))}
        </div>
      </div>

      <Socials />
    </div>
  );
};

export default Calculator;
