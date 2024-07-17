import { BsPostcard } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

const SideBar = ({selectTab, setSelectTab}) => {

  return (
    <div className="flex flex-col items-center absolute pr-6 top-[-40px] h-full bg-neutral-500">
      <h6 className="pl-8 text-center">Tabs</h6>
      <ul className="flex flex-col gap-2 items-center">
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
