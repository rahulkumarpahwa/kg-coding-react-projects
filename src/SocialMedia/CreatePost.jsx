import { useRef } from "react";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";
import toast from "react-hot-toast";

const CreatePost = ({ setSelectTab }) => {
  const imgElement = useRef();
  const pElement = useRef();
  const { postDispatch } = useContext(socialContext);
  return (
    <div className="pl-32 flex flex-col justify-center items-center m-4 gap-2">
      <h2>Create Post</h2>
      <input
        type="text"
        ref={imgElement}
        placeholder="Enter the Image Link here!"
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <input
        className="border focus:outline-none rounded-lg w-72 p-1 "
        type="text"
        placeholder="Enter Caption Here!"
        ref={pElement}
      />
      <button
        className="w-24 bg-blue-700 text-white rounded-lg p-1 text-xl mt-3"
        onClick={() => {
          postDispatch({
            type: "NEW_POST",
            payload: {
              img: imgElement.current.value,
              para: pElement.current.value,
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
