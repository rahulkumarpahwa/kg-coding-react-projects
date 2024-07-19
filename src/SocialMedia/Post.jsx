import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import { TbHttpDelete } from "react-icons/tb";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";
import toast from "react-hot-toast";

const Post = ({ value }) => {
  const [like, setLike] = useState(false);
  const { postDispatch } = useContext(socialContext);
  return (
    <div className="shadow rounded-lg m-2 p-2 flex flex-col items-center justify-center w-80 h-72">
      <div className="shadow m-1 ">
        <img src={value.img} alt="" className="w-full rounded" />
      </div>
      <p className="line-clamp-2">{value.para}</p>
      <hr className="h-px w-full m-1 p-1" />
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
        <button
          onClick={() => {
            postDispatch({
              type: "DELETE_POST",
              payload: value,
            });
            toast.success("Post Deleted Successfully!!");
          }}
        >
          <TbHttpDelete />
        </button>
      </div>
    </div>
  );
};

export default Post;
