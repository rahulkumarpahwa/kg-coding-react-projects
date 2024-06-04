import { useState } from "react";
import InputFood from "./InputFood";
import FoodItem from "./FoodItem";
import Error from "./Error";
import BackButton from "../BackButton";
const Food = () => {
  const [foodList, setFoodList] = useState(["Bread", "Milk", "Fruits"]);

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
        <h2 className="">Healthy Foods</h2>
        <InputFood setList={setList} />
        <hr className="h-px w-60" />
        <FoodItem foodList={foodList} />
        <Error foodList={foodList} />
      </div>
    </div>
  );
};

export default Food;
