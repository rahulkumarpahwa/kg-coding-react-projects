import { BsPostcard } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

const SideBar = ({selectTab, setSelectTab}) => {

  return (
    <div className=" w-36 p-6 flex flex-col items-center h-screen shadow-2xl">
      <ul className="flex flex-col gap-5 items-center">
        <li
          onClick={() => setSelectTab("Show Post")}
          className={`${
            selectTab === "Show Post" ? "bg-orange-500" : "bg-white"
          } px-8 py-2 rounded-lg text-2xl`}
        >
          <BsPostcard />
        </li>
        <li
          onClick={() => setSelectTab("Create Post")}
          className={`${
            selectTab === "Create Post" ? "bg-neutral-500" : "bg-white"
          } px-8 py-2 rounded-lg text-2xl`}
        >
          <IoCreateOutline />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
