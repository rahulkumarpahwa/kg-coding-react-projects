import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Socials from "../components/Socials";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let TimeId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(TimeId);
    };
  });

  return (
    <div className="flex flex-col items-center justify-center my-36">
      <BackButton />
      <div className="border-2 border-black text-center rounded-xl ">
        <h2 className="border-b-2 rounded-xl py-1 border-black bg-gradient-to-r from-slate-400 to-gray-300">
          Clock
        </h2>
        <h2 className="text-5xl p-3">{date.toLocaleDateString()}</h2>
        <h2 className="p-3 font-bold text-8xl">{date.toLocaleTimeString()}</h2>
      </div>
      <Socials />
    </div>
  );
};

export default Clock;
