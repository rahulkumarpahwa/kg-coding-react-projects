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
      img: "https://wallup.net/wp-content/uploads/2019/09/708260-kittens-kitten-cat-cats-baby-cute-748x421.jpg",
      para: "This is first Cat post. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://wallup.net/wp-content/uploads/2019/09/838036-autumn-fall-landscape-nature-tree-forest-leaf-leaves-748x421.jpg",
      para: "This is second test post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam animi quod, tenetur harum sed dolorum cum id vel. Eos tempore laborum animi voluptas modi perspiciatis quidem quas. Voluptates, nemo!",
    },
  ]);




  return (
    <socialContext.Provider value={{ postList, postDispatch }}>
      <div className="relative font-mono mt-10 mb-40" >
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
