import { Link } from "react-router-dom";

const Card = ()=>{
return (
  <Link
    to="/todo"
    className="border-2 text-center no-underline border-black w-40 p-4 hover:scale-105 duration-200"
  >
    Todo App
  </Link>
);
};

export default Card;