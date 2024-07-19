import { BsPostcard } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SideBar = () => {

  return (
    <div className="flex flex-col items-center border-r-2 min-h-[10rem] h-full absolute pr-6 ">
      <ul className="flex flex-col gap-2 items-center mt-10">
        <NavLink
          to="/socialmediawithlinkandusenavigate/"
          className={({ isActive }) =>
            isActive
              ? "bg-orange-500 rounded-lg text-black no-underline "
              : "text-black no-underline"
          }
          end
        >
          <li
            className={`px-8 py-2  rounded-lg text-2xl flex gap-2 items-center`}
          >
            <BsPostcard />
            <span className="text-xl">Show</span>
          </li>
        </NavLink>
        <NavLink
          to="/socialmediawithlinkandusenavigate/createpost/"
          className={({ isActive }) =>
            isActive
              ? "bg-neutral-500 rounded-lg text-black no-underline "
              : "text-black no-underline"
          }
        >
          <li
            className={`px-8 py-2 rounded-lg text-2xl flex gap-2 items-center`}
          >
            <IoCreateOutline />
            <span className="text-xl">Create</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
