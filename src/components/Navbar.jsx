import { useState, useEffect } from "react";
import image from "../assets/rahullogo.png";
import { Link } from "react-router-dom";
import data from "../utils/list.json";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (!e.target.closest(".drop-button")) {
        setDrop(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  return (
    <div className="flex justify-between pt-2 px-4 p-2 items-center">
      <Link to="/">
        <img src={image} alt="" className="w-[4rem]" />
      </Link>
      <ul className="flex justify-center items-center gap-10">
        <li
          className="hover:bg-[#00cce7] rounded-lg hover:text-white p-1 font-bold z-90 drop-button"
          onClick={() => {
            setDrop(!drop);
          }}
        >
          Projects
        </li>
        {drop && (
          <div className="absolute top-[48px] right-20 z-90 w-56 hover:w-[22rem]">
            <ul className="flex flex-col border p-2 rounded-lg bg-white">
              {data.list.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  target={item.name === "Myntra Full Stack App" ? "_blank" : ""}
                  className="no-underline text-inherit hover:text-[#00cce7] font-semibold truncate hover:text-clip"
                >
                  {item.name}
                </Link>
              ))}
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
