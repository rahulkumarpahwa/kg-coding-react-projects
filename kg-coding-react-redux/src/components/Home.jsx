import Card from "./Card";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <h1 className="text-center"> Introduction: </h1>
      <p className="font-semibold">
        {" "}
        Hi! My name is Rahul Kumar and This is a home page of the React-Redux
        Projects with KG Coding.
      </p>
      <div>
        <h2 className="text-center">You can go to following Projects:</h2>
        <div className="flex flex-wrap gap-20  my-8">
          <Card data={{ path: "/todo", name: "Todo App" }} />
          <Card data={{ path: "/clock", name: "Clock App" }} />
          <Card data={{ path: "/clock", name: "Clock App" }} />
          <Card data={{ path: "/clock", name: "Clock App" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
