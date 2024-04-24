const InputTodo = (props) => {
  const {input , setInput}= props;
  console.log(props);
  return (
    <div className="flex my-3 gap-10 border-2 bg-slate-400 p-4 rounded-xl">
      <input
        type="text"
        className="border-2 w-96 py-1 border-white text-white  bg-slate-500 rounded-xl text-center outline-slate-400"
        placeholder="Type your task here!"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        className="border-2 border-white bg-slate-500 text-center rounded-lg px-2 text-white outline-slate-400"
        type="date"
        id="meeting-time"
        name="meeting-time"
        value=""
        // min={new Date()}
        // max="2018-06-14T00:00"
      />
      <button className="w-40 rounded-lg border-2 bg-green-500 text-white">
        Add
      </button>
    </div>
  );
};

export default InputTodo;
