import { useRef } from "react";

const CreatePost = () => {
  const imgElement = useRef();
  const pElement = useRef();
  return (
    <div className="pl-32 flex flex-col justify-center items-center m-4 gap-2">
      <h2>Create Post</h2>
      <input
        type="file"
        ref={imgElement}
        className="border focus:outline-none p-2 rounded-lg w-72"
      />
      <input
        className="border focus:outline-none rounded-lg w-72 p-1 "
        type="text"
        placeholder="Enter Caption Here!"
        ref={pElement}
      />
      <button className="w-24 bg-blue-700 text-white rounded-lg p-1 text-xl mt-3">
        Create
      </button>
    </div>
  );
};

export default CreatePost;
