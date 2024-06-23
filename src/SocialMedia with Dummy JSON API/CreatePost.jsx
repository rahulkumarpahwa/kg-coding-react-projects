import { useRef } from "react";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";
import toast from "react-hot-toast";

const CreatePost = ({ setSelectTab }) => {
  const userElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const likeElement = useRef();
  const dislikeElement = useRef();
  const tagsElement = useRef();
  const viewsElement = useRef();

  const { postDispatch } = useContext(socialContext);
  return (
    <div className="pl-32 flex flex-col justify-center items-center m-4 gap-2">
      <h2>Create Post</h2>
      <input
        type="text"
        ref={userElement}
        placeholder="Enter the User Id here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
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
          postDispatch({
            type: "NEW_POST",
            payload: {
              id: Date.now(),
              userId: userElement.current.value,
              title: titleElement.current.value,
              body: bodyElement.current.value,
              reactions: {
                likes: likeElement.current.value,
                dislikes: dislikeElement.current.value,
              },
              tags: tagsElement.current.value.split(" "),
              views: viewsElement.current.value,
            },
          });
          toast.success("Post Created Successfully!!");
          setSelectTab("Show Post");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePost;
