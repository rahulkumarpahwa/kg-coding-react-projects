import { useContext } from "react";
import toast from "react-hot-toast";
import { redirect, Form } from "react-router-dom";

const CreatePost = () => {
  return (
    <div className="pl-32 flex flex-col justify-center items-center m-4 gap-2">
      <h2>Create Post</h2>
      <Form method="POST"  className="flex flex-col justify-center items-center gap-2">
        <input
          type="number"
          name="userId"
          placeholder="Enter the UserId between 1 to 100!"
          className="border focus:outline-none p-2 rounded-lg w-72"
          min={1}
        />
        <input
          type="text"
          name="title"
          placeholder="Enter the Title here!"
          className="border focus:outline-none p-2 rounded-lg w-72"
        />
        <input
          type="text"
          name="body"
          placeholder="Enter the Body Text here!"
          className="border focus:outline-none p-2 rounded-lg w-72"
        />
        <input
          type="number"
          name="likes"
          placeholder="Enter the No. of Likes here!"
          className="border focus:outline-none p-2 rounded-lg w-72"
        />
        <input
          type="number"
          name="dislikes"
          placeholder="Enter the No. of Dislikes here!"
          className="border focus:outline-none p-2 rounded-lg w-72"
        />
        <input
          type="text"
          name="tags"
          placeholder="Enter the Tags with space here!"
          className="border focus:outline-none p-2 rounded-lg w-72"
        />
        <input
          type="number"
          name="views"
          placeholder="Enter the No. of Views here!"
          className="border focus:outline-none p-2 rounded-lg w-72"
        />
        <button
          type="submit"
          className="w-24 bg-blue-700 text-white rounded-lg p-1 text-xl mt-3"
        >
          Create
        </button>
      </Form>
    </div>
  );
};

export default CreatePost;

export const PostAction = async (data) => {
  const formData = await data.request.formData();
  const { userId, title, body, likes, dislikes, tags, views } =
    Object.fromEntries(formData);
    console.log(userId, title, body, likes, dislikes, tags, views);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      title,
      body,
      reactions: {
        likes,
        dislikes,
      },
      tags: tags.split(" "),
      views,
    }),
  })
    .then((res) => res.json())
    .then((post) => {
      // postDispatch({
      //   type: "NEW_POST",
      //   payload: post,
      // });
      toast.success("Post Created Successfully!!");
      console.log(post);
    });
  return redirect("/socialmediawithloaderandaction/");
};
