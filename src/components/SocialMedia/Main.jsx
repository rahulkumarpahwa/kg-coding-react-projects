import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import ShowPost from "./ShowPost";
import CreatePost from "./CreatePost";

const Main = () => {
  const [selectTab, setSelectTab] = useState("Show Post");
  return (
    <div>
      <Header />
      <SideBar selectTab={selectTab} setSelectTab={setSelectTab} />
      {selectTab === "Show Post" ? <ShowPost /> : <CreatePost />}
    </div>
  );
};

export default Main;
