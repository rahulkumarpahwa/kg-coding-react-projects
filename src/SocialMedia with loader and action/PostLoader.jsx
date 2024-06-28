const PostLoader = () => {
  return function fetchData() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        return data.posts;
      });
  };
};

export default PostLoader;
