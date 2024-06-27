import logo from "../assets/rahullogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <img
        src={logo}
        alt=""
        width={1000}
        height={1000}
        className="w-10 bg-slate-300 p-1 rounded-lg"
      />
      <ul className="flex gap-10">
        <li>
          <Link to={"/socialmedia"} className="no-underline ">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/socialmedia"} className="no-underline">
            Add +
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
