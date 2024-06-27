import { useRef } from "react";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const userElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const likeElement = useRef();
  const dislikeElement = useRef();
  const tagsElement = useRef();
  const viewsElement = useRef();

  const navigate = useNavigate();

  const { postDispatch } = useContext(socialContext);

  const CreatePostWithApi = () => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userElement.current.value,
        title: titleElement.current.value,
        body: bodyElement.current.value,
        reactions: {
          likes: likeElement.current.value,
          dislikes: dislikeElement.current.value,
        },
        tags: tagsElement.current.value.split(" "),
        views: viewsElement.current.value,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        postDispatch({
          type: "NEW_POST",
          payload: post,
        });
        navigate("/socialmediawithlinkandusenavigate/");
      });
  };
  return (
    <div className="pl-32 flex flex-col justify-center items-center m-4 gap-2">
      <h2>Create Post</h2>
      <input
        type="number"
        ref={userElement}
        placeholder="Enter the UserId between 1 to 100!"
        className="border focus:outline-none p-2 rounded-lg w-72"
        min={1}
      />
      <input
        type="text"
        ref={titleElement}
        placeholder="Enter the Title here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <input
        type="text"
        ref={bodyElement}
        placeholder="Enter the Body Text here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <input
        type="number"
        ref={likeElement}
        placeholder="Enter the No. of Likes here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <input
        type="number"
        ref={dislikeElement}
        placeholder="Enter the No. of Dislikes here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <input
        type="text"
        ref={tagsElement}
        placeholder="Enter the Tags with space here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <input
        type="number"
        ref={viewsElement}
        placeholder="Enter the No. of Views here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <button
        className="w-24 bg-blue-700 text-white rounded-lg p-1 text-xl mt-3"
        onClick={() => {
          CreatePostWithApi();
          toast.success("Post Created Successfully!!");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePost;
