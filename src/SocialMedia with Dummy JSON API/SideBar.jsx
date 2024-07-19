import { BsPostcard } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

const SideBar = ({ selectTab, setSelectTab }) => {
  return (
    <div className="flex flex-col items-center border-r-2 min-h-[10rem] h-full absolute pr-6 ">
      <ul className="flex flex-col gap-2 items-center mt-10">
        <li
          onClick={() => setSelectTab("Show Post")}
          className={`${
            selectTab === "Show Post" ? "bg-orange-500" : "bg-white"
          } px-8 py-2 rounded-lg text-2xl flex gap-2 items-center`}
        >
          <BsPostcard />
          <span className="text-xl">Show</span>
        </li>
        <li
          onClick={() => setSelectTab("Create Post")}
          className={`${
            selectTab === "Create Post" ? "bg-neutral-500" : "bg-white"
          } px-8 py-2 rounded-lg text-2xl flex gap-2 items-center`}
        >
          <IoCreateOutline />
          <span className="text-xl">Create</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
