import { BsPostcard } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {

  return (
    <div className="absolute w-32 p-6 min-h-screen border flex flex-col items-center">
      <ul className="flex flex-col gap-10 text-2xl items-center">
        <Link to="/socialmediawithlinkandusenavigate/">
          <li className={`px-8 py-2 rounded-lg`}>
            <BsPostcard />
          </li>
        </Link>
        <Link to="/socialmediawithlinkandusenavigate/createpost">
          <li className={`px-8 py-2 rounded-lg`}>
            <IoCreateOutline />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
