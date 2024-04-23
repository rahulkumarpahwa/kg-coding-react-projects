const TodoItem = () => {
  return (
    <div className=" todo-container items-center flex justify-center text-center gap-20 bg-gray-400 text-white rounded-lg py-1 mx-6 my-1">
      <div className=" w-96 py-1 ">vikram nam di tension</div>
      <div className=" py-1 px-2">29-4-2024</div>
      <button className="w-40 mx-4 rounded-lg text-center no-underline border-2 bg-yellow-600 text-white">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
