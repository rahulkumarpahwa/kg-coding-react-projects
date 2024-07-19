import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link
      to={item.path}
      target={
        item.name === "Myntra Full Stack App" || item.name === "Redux with Node"
          ? "_blank"
          : "_parent"
      }
      className="shadow-xl font-mono antialiased text-xl shadow-zinc-400 rounded-xl text-center no-underline text-black  w-56 p-4 hover:scale-105 duration-200 transition-transform"
    >
      {item.name}
    </Link>
  );
};

export default Card;
