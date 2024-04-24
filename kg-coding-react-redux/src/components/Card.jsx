import { Link } from "react-router-dom";

const Card = (props) => {
  const { path, name } = props.data;
  return (
    <Link
      to={path}
      className="border-2 rounded-xl text-center no-underline border-black w-40 p-4 hover:scale-105 duration-200"
    >
      {name}
    </Link>
  );
};

export default Card;
