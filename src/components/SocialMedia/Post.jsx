import { useState } from "react";
import redux from "../../assets/redux.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";

const Post = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="shadow rounded-lg p-4 m-4 flex flex-col items-center justify-center">
      <div className="w-48">
        <img src={redux} alt="" className="w-full" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam
        illo corporis animi harum delectus iure cumque alias eveniet odit, quas
        doloremque molestias iusto velit debitis eaque minima modi aspernatur.
      </p>
      <hr className="h-px w-full" />
      <div className="flex gap-4 justify-start">
        <button
          onClick={() => {
            setLike(!like);
          }}
        >
          {" "}
          {like ? <IoHeart className="text-red-500" /> : <IoMdHeartEmpty />}
        </button>
        <button>
          <IoShareOutline />
        </button>
      </div>
    </div>
  );
};

export default Post;
