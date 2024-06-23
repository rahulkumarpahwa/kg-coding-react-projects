import { BsPostcard } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

const SideBar = ({selectTab, setSelectTab}) => {

  return (
    <div className="absolute w-32 p-6 min-h-screen border flex flex-col items-center">
      <ul className="flex flex-col gap-10 text-2xl items-center">
        <li
          className={`${
            selectTab === "Show Post" ? "bg-orange-500" : "bg-white"
          } px-8 py-2 rounded-lg`}
        >
          <BsPostcard onClick={() => setSelectTab("Show Post")} />
        </li>
        <li
          className={`${
            selectTab === "Create Post" ? "bg-neutral-500" : "bg-white"
          } px-8 py-2 rounded-lg`}
        >
          <IoCreateOutline onClick={() => setSelectTab("Create Post")} />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
