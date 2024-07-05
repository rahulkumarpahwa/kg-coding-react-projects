import { useRef } from "react";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { FcPrivacy } from "react-icons/fc";

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const privacy = useSelector((store) => store.privacy);

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
        {privacy ? (
          <div className="w-[4rem] h-[3.2rem] border items-center flex justify-center m-2 p-4">
            {counter}
          </div>
        ) : (
          <div className="w-[4rem] h-[3.2rem] border items-center flex justify-center m-2 p-3">
            <FcPrivacy />
          </div>
        )}
        <HiMinusCircle
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="z-90"
        />
      </div>

      <div className="flex gap-2">
        <button
          className="flex items-center justify-center bg-red-600  text-white px-1 rounded-lg "
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Reset <TiDelete className="text-xl" />
        </button>
        <button
          className="flex items-center justify-center bg-yellow-400 text-white font-bold px-1 rounded-lg "
          onClick={() => dispatch({ type: "PRIVATE" })}
        >
          Private
        </button>
      </div>
      <div className="m-2 flex items-center gap-2">
        <input
          type="number"
          className="border-2 w-24 text-center"
          placeholder="enter no."
          ref={inputElement}
        />{" "}
        <button
          className="bg-blue-500 text-white px-2 py-1 text-xs  rounded"
          onClick={() =>
            dispatch({
              type: "ADDITION",
              payload: { value: inputElement.current.value },
            })
          }
        >
          Add
        </button>
        <button
          className="bg-green-600 text-white px-2 py-1 text-xs  rounded"
          onClick={() =>
            dispatch({
              type: "SUBTRACTION",
              payload: { value: inputElement.current.value },
            })
          }
        >
          Sub
        </button>
        <button
          className="bg-red-600 text-white px-2 py-1  h-[24px] rounded"
          onClick={() => (inputElement.current.value = "")}
        >
          <TiDelete />
        </button>
      </div>
    </div>
  );
};

export default Counter;
