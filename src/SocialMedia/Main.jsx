import { useState } from "react";
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
      img: "http://localhost:5173/src/assets/rahullogo.png",
      para: "This is first test post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam animi quod, tenetur harum sed dolorum cum id vel. Eos tempore laborum animi voluptas modi perspiciatis quidem quas. Voluptates, nemo!",
    },
    {
      img: "http://localhost:5173/src/assets/rahullogo.png",
      para: "This is second test post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam animi quod, tenetur harum sed dolorum cum id vel. Eos tempore laborum animi voluptas modi perspiciatis quidem quas. Voluptates, nemo!",
    },
  ]);

  return (
    <socialContext.Provider value={{ postList, postDispatch }}>
      <div className="relative font-mono" >
        <h2 className="text-center font-mono antialiased">Social Media</h2>
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
