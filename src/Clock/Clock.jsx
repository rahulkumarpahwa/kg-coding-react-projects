import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let TimeId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(TimeId);
    };
  });

  return (
    <div className="flex flex-col items-center justify-center my-30 py-20">
      <div className="border-2 border-black text-center rounded-xl ">
        <h2 className="border-b-2 rounded-xl py-1 border-black bg-gradient-to-r from-slate-400 to-gray-300">
          Clock
        </h2>
        <h2 className="text-5xl p-3">{date.toLocaleDateString()}</h2>
        <h2 className="p-3 font-bold text-8xl">{date.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
};

export default Clock;
