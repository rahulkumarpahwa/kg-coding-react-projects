const InputTodo = (props) => {
  const { inputRef, dateRef, onclick } = props;
  return (
    <div className="flex my-3 gap-10 border-2 bg-slate-400 p-4 rounded-xl">
      <input
        type="text"
        className="border-2 w-96 py-1 border-white text-white  bg-slate-500 rounded-xl text-center outline-slate-400"
        placeholder="Type your task here!"
        ref={inputRef}
      />
      <input
        className="border-2 border-white bg-slate-500 text-center rounded-lg px-2 text-white outline-slate-400"
        type="date"
        id="meeting-time"
        name="meeting-time"
       ref={dateRef}
      />
      <button onClick={onclick}  className="w-40 rounded-lg border-2 bg-green-500 text-white">
        Add
      </button>
    </div>
  );
};

export default InputTodo;
