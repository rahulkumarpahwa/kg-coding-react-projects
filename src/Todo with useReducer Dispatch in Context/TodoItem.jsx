import { useContext } from "react";
import { TodoContext } from "../Context/todoContext";

const TodoItem = ({ todoItem }) => {
  const { todoListDispatch } = useContext(TodoContext);
  return (
    <div className=" todo-container items-center flex justify-center text-center gap-20 bg-gray-400 text-white rounded-lg py-1 mx-6 my-1">
      <div className=" w-96 py-1 ">{todoItem.task}</div>
      <div className=" py-1 px-2">{todoItem.date}</div>
      <button
        onClick={() =>
          todoListDispatch({
            type: "DELETE_TODO",
            payload: todoItem,
          })
        }
        className="w-40 mx-4 rounded-lg text-center no-underline border-2 bg-yellow-600 text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
