const FoodItem = ({ foodList }) => {
  return (
    <div>
      <ul className="m-0 p-0">
        {foodList.map((item) => (
          <li key={item} className="flex justify-between items-center gap-40 my-2 font-bold">
            <div>{item}</div> <button className="bg-blue-400 rounded-lg px-2 py-1 font-semibold">Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItem;
