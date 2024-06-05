import { useState } from "react";
import InputFood from "./InputFood";
import FoodItem from "./FoodItem";
import Error from "./Error";
import BackButton from "../BackButton";
const Food = () => {
  const [foodList, setFoodList] = useState(["Bread", "Milk", "Fruits"]);
  const [showItem, setShowItem] = useState([]);

  const showMethod = (item) => {
    if (!showItem.includes(item)) {
      setShowItem([...showItem, item]);
    }
    if (showItem.includes(item)) {
      const newArr = showItem.filter((value) => value !== item);
      setShowItem(newArr);
    }
  };

  const setList = (e) => {
    if (e.key === "Enter" && e.target.value != "") {
      setFoodList([...foodList, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="flex justify-center items-center flex-col m-8">
      <BackButton />
      <h2>Type the healthy food name and press Enter ↲</h2>
      <div className="flex flex-col items-center justify-center m-4 border p-4 rounded-lg">
        <h2 className="text-purple-800">Healthy Foods</h2>
        <InputFood setList={setList} />
        <hr className="h-px w-60" />
        <ul className="m-0 p-0">
          {foodList.map((item) => (
            <FoodItem
              item={item}
              key={item}
              change={showItem.includes(item)}
              setShowItem={() => showMethod(item)}
            />
          ))}
        </ul>

        <Error foodList={foodList} />
      </div>
    </div>
  );
};

export default Food;
