import Card from "./Card";
import image from "../assets/react.svg";
import image2 from "../assets/redux.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <div className="flex gap-10 my-4 ">
        <img
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-20 rotate"
        />
        <img
          src={image2}
          alt=""
          width={1000}
          height={1000}
          className="w-20 rotate"
        />
      </div>

      <h1 className="font-semibold text-3xl font-mono">
        Welcome to{" "}
        <Link className="text-black" to="/">
          React-Redux Projects
        </Link>{" "}
        with KG Coding.
      </h1>

      {/* <figure className="shadow p-2">
          <img src="https://avatars.githubusercontent.com/u/56966500?v=4" className="w-48" />
          <figcaption>Rahul Kumar</figcaption>
        </figure> */}

      <h2 className="text-center text-mono text-3xl">
        You can go to the following Projects :
      </h2>
      <div className="flex flex-wrap gap-20 my-4 justify-center items-center">
        <Card data={{ path: "/todo", name: "Todo App" }} />
        <Card data={{ path: "/clock", name: "Clock App" }} />
        <Card data={{ path: "/calculator", name: "Calculator App" }} />
        <Card data={{ path: "/food", name: "Healthy Food" }} />
        <Card data={{ path: "/socialmedia", name: "Social Media" }} />
      </div>
    </div>
  );
};

export default Home;
