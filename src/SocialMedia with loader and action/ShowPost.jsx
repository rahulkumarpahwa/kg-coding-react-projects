import Post from "./Post";
import { useContext } from "react";
import { socialContext } from "../Context/socialMediaContext";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const ShowPost = () => {
  const { postList, postDispatch } = useContext(socialContext);
  const postFromLoader = useLoaderData();
  console.log(postFromLoader);

  useEffect(() => {
    postDispatch({
      type: "ADD_API_POSTS",
      payload: postFromLoader,
    });
  }, [postFromLoader, postDispatch]);

  return postList?.length === 0 ? (
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

export const PostLoader = async () => {
  return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        return data.posts;
      });
};
