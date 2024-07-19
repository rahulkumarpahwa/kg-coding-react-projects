import Post from "./Post";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";
import Loading from "./Loading";
import useApiPost from "./useApiPost";

const ShowPost = () => {
  const { postList } = useContext(socialContext);

  useApiPost();

  return postList.length === 0 ? (
    <Loading />
  ) : (
    <div className="flex items-center flex-col justify-center m-auto w-[30rem]">
      <h2 className="text-2xl">Show Post</h2>
      {postList.map((value) => {
        return <Post key={value.id} value={value} />;
      })}
    </div>
  );
};

export default ShowPost;
