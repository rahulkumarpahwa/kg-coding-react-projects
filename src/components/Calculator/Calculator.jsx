import { useState } from "react";
import BackButton from "../BackButton";
import toast, { Toaster } from "react-hot-toast";

const Calculator = () => {
  const [number, setNumber] = useState("0");
  // const [signColors, setSignsColors] = useState({
  //   clear: "#a7a6a7",
  //   numbers: "#333333",
  //   operators: "#ff9602",
  // }); 

  const calculate = (value) => {
    try {
      if (value === "c") {
        setNumber("");
      } else if (value === "=") {
        const result = eval(number.toString());
        setNumber(result);
      } else {
        setNumber(number + value);
      }
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message + "\n Please Clear! & Try again");
    }
  };

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
    {
      name: "c",
      value: "c",
    },
    {
      name: ".",
      value: ".",
    },
    {
      name: "=",
      value: "=",
    },
  ];

  return (
    <div className="flex items-center justify-center font-bold my-10 relative">
      <BackButton />
      <div className="m-auto border-2 flex flex-col w-[16rem] border-slate-500 p-8 bg-black  rounded-lg">
        <input
          className="text-right w-30 py-2 text-5xl font-light text-white focus:outline-none bg-inherit"
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <div className="flex items-center justify-evenly flex-wrap gap-2 my-1">
          {buttons.map((value) => (
            <button
              className="w-[3rem] h-[3rem] rounded-full font-bold text-center text-white bg-[#ff9602] hover:text-slate-800"
              key={value.value}
              onClick={() => {
                calculate(value.value);
              }}
            >
              {value.name}
            </button>
          ))}
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Calculator;
