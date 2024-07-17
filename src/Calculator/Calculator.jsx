import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Calculator = () => {
  const [number, setNumber] = useState("");
  // const [bgColor, setBgColor] = useState("#fff");

  const calculate = (value) => {
    try {
      if (value === "C") {
        setNumber("");
      } else if (value === "=") {
        const result = eval(number);
        setNumber(result);
      } else {
        setNumber(number + value);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message + "\n Enter with caution!");
    }
  };

  const buttons = [
    "C",
    "+",
    "-",
    "*",
    "/",
    "%",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
  ];

  return (
    <div className="flex items-center justify-center flex-col mt-10 mb-20">
      <h2 className="font-mono">Calculator</h2>
      <div className="border-2 flex flex-col w-[18rem] p-8 bg-neutral-600  rounded-lg">
        <input
          className="text-right w-30 py-2 text-5xl font-light text-white focus:outline-none bg-inherit"
          type="text"
          value={number}
          placeholder="0"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />

        <div className="flex justify-center items-center flex-wrap gap-2">
          {buttons.map((value) => (
            <button
              className="w-[3rem] h-[3rem] rounded-full text-2xl text-white bg-[#a8a8a8]"
              key={value}
              onClick={() => {
                calculate(value);
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Calculator;
