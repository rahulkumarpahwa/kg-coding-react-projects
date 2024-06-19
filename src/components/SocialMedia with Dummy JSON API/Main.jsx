import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import ShowPost from "./ShowPost";
import CreatePost from "./CreatePost";
import { socialContext } from "../../Context/socialMediaContext";
import { useReducer } from "react";
import { Toaster } from "react-hot-toast";

const postReducer = (currentState, action) => {
  let newState = currentState;
  if (action.type === "NEW_POST") {
    newState = [
      {
        id : action.payload.id,
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
        reactions : action.payload.reactions,
        tags: action.payload.tags,
        views: action.payload.views,
      },
      ...currentState,
    ];
  } else if (action.type === "DELETE_POST") {
    newState = currentState.filter((value) => value.id != action.payload);
  } else if (action.type === "ADD_API_POSTS") {
    newState = action.payload;
  }
  return newState;
};

const Main = () => {
  const [selectTab, setSelectTab] = useState("Show Post");
  const [postList, postDispatch] = useReducer(postReducer, [
    {
      id: 1222222,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 192,
        dislikes: 25,
      },
      views: 305,
      userId: 121,
    },
    {
      id: 233231323,
      title: "He was an expert but not in a discipline",
      body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      tags: ["french", "fiction", "english"],
      reactions: {
        likes: 859,
        dislikes: 32,
      },
      views: 4884,
      userId: 91,
    },
  ]);


  const AddPostFromAPI = (posts) =>{
    postDispatch({
       type: "ADD_API_POSTS",
       payload: posts,
    });

  }

  return (
    <socialContext.Provider value={{ postList, postDispatch, AddPostFromAPI }}>
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
