import { useEffect } from "react";
import { useContext } from "react";
import { socialContext } from "../../Context/socialMediaContext";

const useApiPost = () => {
  // const [postListAPI, setPostListAPI] = useState();
  const { AddPostFromAPI } = useContext(socialContext);

  useEffect(() => {
    const PostApi = async () => {
      const data = await fetch("https://dummyjson.com/posts");
      const json = await data.json();
      // console.log(json);
      AddPostFromAPI(json.posts);
    };
    PostApi();

    return () => {
      console.log("useEffect removed!")
    };
  }, []);

  // useEffect(() => {
  //   AddPostFromAPI(postListAPI);
  //   console.log(postListAPI);
  // }, []);
};

export default useApiPost;
