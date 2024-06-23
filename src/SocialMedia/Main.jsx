import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import ShowPost from "./ShowPost";
import CreatePost from "./CreatePost";
import { socialContext } from "../Context/socialMediaContext";

import { useReducer } from "react";
import { Toaster } from "react-hot-toast";

const postReducer = (currentState, action) => {
  let newState = currentState;
  if (action.type === "NEW_POST") {
    newState = [
      { img: action.payload.img, para: action.payload.para },
      ...currentState,
    ];
  } else if (action.type === "DELETE_POST") {
    newState = currentState.filter((value) => value != action.payload);
  }
  return newState;
};

const Main = () => {
  const [selectTab, setSelectTab] = useState("Show Post");
  const [postList, postDispatch] = useReducer(postReducer, [
    {
      img: "https://th.bing.com/th/id/OIP.CbG44bAc8QnKk59hOYTeyAHaHa?rs=1&pid=ImgDetMain",
      para: "hello My name is Rahul Kumar.",
    },
    {
      img: "https://www.jocooks.com/wp-content/uploads/2019/06/chocolate-chip-cookies-1-18-599x899.jpg",
      para: "Hi this is very tasty cookie. Make sure you try It once in your lifetime. ",
    },
  ]);

  return (
    <socialContext.Provider value={{ postList, postDispatch }}>
      <div>
        <Header />
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab} />
        {selectTab === "Show Post" ? (
          <ShowPost />
        ) : (
          <CreatePost setSelectTab={setSelectTab} />
        )}
        <Toaster />
      </div>
    </socialContext.Provider>
  );
};

export default Main;
