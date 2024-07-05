import { useRef } from "react";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputElement = useRef();
  return (
    <div className="flex items-center justify-center flex-col mt-20 gap-1">
      <h2>Counter App With Redux</h2>
      <div className="flex items-center justify-center text-3xl">
        <HiPlusCircle
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="z-90"
        />
        <div className="w-10 h-[3.2rem] border items-center flex justify-center m-2 p-4">
          {counter}
        </div>
        <HiMinusCircle
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="z-90"
        />
      </div>
      <div className="m-2 flex items-center gap-2">
        <input type="number" className="border-2 w-20" ref={inputElement} />{" "}
        <button
          className="bg-slate-500 text-white px-2 py-1 text-xs  rounded"
          onClick={() =>
            dispatch({
              type: "ADDITION",
              payload: { value: inputElement.current.value },
            })
          }
        >
          Add
        </button>
      </div>
      <div
        className="flex items-center justify-center text-red-600 border px-1 rounded-lg "
        onClick={() => dispatch({ type: "CLEAR" })}
      >
        Reset <TiDelete className="text-xl" />
      </div>
    </div>
  );
};

export default Counter;
