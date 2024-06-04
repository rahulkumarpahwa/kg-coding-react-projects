const InputFood = ({ setList }) => {
  return (
    <div className="border flex">
      <input type="text" onKeyDown={setList} className=" focus:outline-none" />{" "}
      <div
        className="px-1 m-1 border text-xs text-center text-gray-400"
      >
       Press ↲
      </div>
    </div>
  );
};

export default InputFood;
