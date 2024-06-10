import Post from "./Post";

const ShowPost = () => {
  return (
    <div className="flex items-center flex-col justify-center pl-32 m-auto mt-4 max-w-xl">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default ShowPost;
