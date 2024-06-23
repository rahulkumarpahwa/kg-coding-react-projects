import { useContext } from "react";
import { TodoContext } from "../Context/todoContext";

const Error = () => {
  const { todoList } = useContext(TodoContext);
  return <div>{todoList.length === 0 && "All Todo's Completed!"}</div>;
};

export default Error;
