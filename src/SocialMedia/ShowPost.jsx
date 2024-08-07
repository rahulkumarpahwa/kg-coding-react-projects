import Post from "./Post";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";

const ShowPost = () => {
  const { postList } = useContext(socialContext);

  return (
    <div className="flex items-center flex-col justify-center m-auto max-w-xl">
      <h2 className="text-2xl">Show Post</h2>
      {postList.map((value) => {
        // console.log(value);
        return <Post key={value.para} value={value} />;
      })}
    </div>
  );
};

export default ShowPost;
