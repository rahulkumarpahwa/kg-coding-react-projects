import { useEffect } from "react";
import { useContext } from "react";
import { socialContext } from "../../Context/socialMediaContext";

const useApiPost = () => {
  // const [postListAPI, setPostListAPI] = useState();
  const { AddPostFromAPI } = useContext(socialContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const PostApi = async () => {
      const data = await fetch("https://dummyjson.com/posts", {signal});
      const json = await data.json();
      // console.log(json);
    AddPostFromAPI(json.posts);
    };
    PostApi();

    return () => {
      console.log("useEffect removed!")
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   AddPostFromAPI(postListAPI);
  //   console.log(postListAPI);
  // }, []);
};

export default useApiPost;
