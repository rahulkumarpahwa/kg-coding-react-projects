import Post from "./Post";
import { useContext } from "react";
import { socialContext } from "../../Context/socialMediaContext";
import Loading from "./Loading";

const ShowPost = () => {
  const { postList } = useContext(socialContext);

  return postList.length === 0 ? (
    <Loading />
  ) : (
    <div className="flex items-center flex-col justify-center pl-32 m-auto mt-4 max-w-xl">
      {postList.map((value) => {
        return <Post key={value.id} value={value} />;
      })}
    </div>
  );
};

export default ShowPost;
