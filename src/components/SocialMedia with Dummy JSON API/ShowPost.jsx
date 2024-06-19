import Post from "./Post";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { socialContext } from "../../Context/socialMediaContext";
import Loading from "./Loading";

const ShowPost = () => {
  const { postList, AddPostFromAPI } = useContext(socialContext);
  const [postListAPI, setPostListAPI] = useState();

  useEffect(() => {
    PostList();
  }, []);

  const PostList = async () => {
    const data = await fetch("https://dummyjson.com/posts");
    const json = await data.json();
    // console.log(json);
    setPostListAPI(json.posts);
  };

  useEffect(() => {
    AddPostFromAPI(postListAPI);
    console.log(postListAPI);
  }, [postListAPI]);

  return !postList ? (
    <Loading />
  ) : (
    <div className="flex items-center flex-col justify-center pl-32 m-auto mt-4 max-w-xl">
      {postList != undefined &&
        postList.map((value) => {
          return <Post key={value.id} value={value} />;
        })}
    </div>
  );
};

export default ShowPost;
