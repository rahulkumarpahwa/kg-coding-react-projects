// import { useState } from "react";
import { TodoContext } from "../Context/todoContext";
import InputTodo from "./InputTodo";
import TodoContainer from "./TodoContainer";
// import toast, { Toaster } from "react-hot-toast";
import Error from "./Error";
import { useReducer } from "react";

const todoReducer = (currentState, action) => {
  //reducer fxn, should be in different file as it is pure fxn.
  let newState = currentState;
  if (action.type === "NEW_TODO") {
    newState = [
      ...currentState,
      { task: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_TODO") {
    newState = currentState.filter((value) => value != action.payload);
  }
  return newState;
};

const Todo = () => {
  // const [todoList, setTodoList] = useState([
  //   {
  //     task: "Learn React and Redux",
  //     date: "2024-06-31",
  //   },
  // ]);

  const [todoList, todoListDispatch] = useReducer(todoReducer, [
    {
      task: "Learn React and Redux",
      date: "2024-06-31",
    },
  ]);

  // const onclick = (input, date) => {
  //   todoListDispatch({
  //     type: "NEW_TODO",
  //     payload: {
  //       task: input,
  //       date,
  //     },
  //   });

  //   // setTodoList((currentValue) => [
  //   //   ...currentValue,
  //   //   { task: input, date: date },
  //   // ]);
  //   toast.success("Todo Added!");
  // };

  // const ondelete = (todoItem) => {
  //   todoListDispatch({
  //     type: "DELETE_TODO",
  //     payload: todoItem,
  //   });

  //   // const newTodoList = todoList.filter((value) => value != todoItem);
  //   // setTodoList(newTodoList);
  //   toast.success("Todo Deleted!");
  // };

  return (
    <TodoContext.Provider value={{ todoList, todoListDispatch }}>
      <div className="flex flex-col justify-center items-center">
        <h2>Todo With Context API</h2>
        <InputTodo />
        <TodoContainer />
        <Error />
        {/* <Toaster /> */}
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
