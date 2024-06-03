import { useState } from "react";
import image from "../assets/rahullogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  return (
    <div className="flex justify-between p-4 items-center">
      <Link to="/">
        <img src={image} alt="" className="w-20" />
      </Link>
      <ul className="flex justify-center gap-10">
        <li
          className="hover:bg-[#00cce7] rounded-lg hover:text-white p-1 font-bold z-30"
          onClick={() => {
            setDrop(!drop);
          }}
        >
          Projects
        </li>
        {drop && (
          <div className="absolute top-14 right-20">
            <ul className="flex flex-col border p-2  m-4 rounded-lg ">
              <Link
                to="/todo"
                className="no-underline text-inherit hover:text-[#00cce7] font-semibold"
              >
                Todo
              </Link>
              <Link
                to="/clock"
                className="no-underline text-inherit  hover:text-[#00cce7] font-semibold"
              >
                Clock
              </Link>
              <Link
                to="/todo"
                className="no-underline text-inherit  hover:text-[#00cce7] font-semibold"
              >
                Calculator
              </Link>
            </ul>
          </div>
        )}

        <Link to="/about" className="no-underline text-inherit">
          <li className="hover:bg-[#00cce7] rounded-lg hover:text-white p-1 font-bold">
            About
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
