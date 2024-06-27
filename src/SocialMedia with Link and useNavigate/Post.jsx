
import { TbHttpDelete } from "react-icons/tb";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";
import toast from "react-hot-toast";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdAutoGraph } from "react-icons/md";

const Post = ({ value }) => {
  const { postDispatch} = useContext(socialContext);
  

  // if (!state) {
  //   postDispatch({
  //     type: "ADD_API_POSTS",
  //     payload: postListApi,
  //   });
  //   setState(true);
  // }

  return (
    <div className="shadow rounded-lg p-4 m-4 flex flex-col items-center justify-center">
      <div className="font-bold">@User{value.userId}</div>
      <div className="font-bold text-xl">{value.title}</div>
      <div className="my-3">{value.body}</div>
      <div className="flex gap-5 items-center">
        <div>
          <AiFillLike />
          {value.reactions.likes}
        </div>
        <div>
          <AiFillDislike />
          {value.reactions.dislikes}
        </div>
        <div>
          <MdAutoGraph />
          {value.views}
        </div>
        <TbHttpDelete
          className="text-3xl bg-red-300 p-1 rounded-lg"
          onClick={() => {
            postDispatch({
              type: "DELETE_POST",
              payload: value.id,
            });
            toast.success("Post Deleted Successfully!!");
          }}
        />
      </div>
      <div className="capitalise my-2">Tags : #{value.tags.join("  #")}</div>
    </div>
  );
};

export default Post;
