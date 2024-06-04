import Card from "./Card";
import image from "../assets/react.svg";
import image2 from "../assets/redux.svg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
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

        <p className="font-semibold">
          {" "}
          Hi! My name is Rahul Kumar and This is a home page of the React-Redux
          Projects with KG Coding.
        </p>
        <div>
          <h2 className="text-center">You can go to following Projects:</h2>
          <div className="flex flex-wrap gap-20  my-4">
            <Card data={{ path: "/todo", name: "Todo App" }} />
            <Card data={{ path: "/clock", name: "Clock App" }} />
            <Card data={{ path: "/calculator", name: "Calculator App" }} />
            <Card data={{ path: "/food", name: "Healthy Food" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
