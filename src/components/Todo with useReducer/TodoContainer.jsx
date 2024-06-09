import TodoItem from "./TodoItem";
import { TodoContext } from "../../Context/todoContext";
import { useContext } from "react";

const TodoContainer = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <div>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.task} todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoContainer;
