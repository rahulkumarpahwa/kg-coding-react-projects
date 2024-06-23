const FoodItem = ({ item, change , setShowItem}) => {
  return (
    <li
      className={`flex justify-between items-center gap-40 my-2 font-bold p-2 rounded-lg ${
        change ? "bg-pink-400" : "bg-white"
      }`}
    >
      <div>{item}</div>{" "}
      <button className="bg-purple-500 rounded-lg px-2 py-1 font-semibold text-white" onClick={()=>{
        setShowItem();
      }}>
        {change ? "❌" : "Buy"  }
      </button>
    </li>
  );
};

export default FoodItem;
