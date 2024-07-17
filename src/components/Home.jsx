import Card from "./Card";
import image from "../assets/react.svg";
import image2 from "../assets/redux.svg";
import { Link } from "react-router-dom";
import data from "../utils/list.json";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center py-10">
      <div className="flex gap-10 my-4 ">
        <img src={image} className="w-20 rotate" />
        <img src={image2} className="w-20 rotate" />
      </div>
      <h1 className="font-semibold text-3xl font-mono">
        Welcome to{" "}
        <Link className="text-black" to="/">
          React-Redux Projects
        </Link>{" "}
        with KG Coding.
      </h1>
      <h2 className="text-center text-mono text-3xl">
        You can go to the following Projects :
      </h2>
      <div className="flex flex-wrap gap-20 my-4 justify-center items-center">
        {data.list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
