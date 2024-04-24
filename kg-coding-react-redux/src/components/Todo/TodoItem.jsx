const TodoItem = (props) => {
  console.log(props);
  return (
    <div className=" todo-container items-center flex justify-center text-center gap-20 bg-gray-400 text-white rounded-lg py-1 mx-6 my-1">
      <div className=" w-96 py-1 ">{props.value.task}</div>
      <div className=" py-1 px-2">{props.value.date}</div>
      <button onClick={props.ondelete} className="w-40 mx-4 rounded-lg text-center no-underline border-2 bg-yellow-600 text-white">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
