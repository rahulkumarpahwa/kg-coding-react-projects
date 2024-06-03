


"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState({
    name: "none",
    html_url: "none",
    avatar_url: "https://avatars.githubusercontent.com/u/56966500?v=4",
    bio: "none",
    twitter_username: "none",
  });

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/rahulkumarpahwa");
    const json = await data.json();
    // console.log(json);
    setData(json);
  };

  fetchData();

  return data != undefined ? (
    <div className="">
      <div className="flex items-center justify-center gap-10">
        <div className="">
          <h3 className="text-center my-4 text-md  text-sans">Build By :</h3>
          <div className="border border-gray-500 hover:border-white max-w-[17rem] rounded-lg">
            <Link
              to={data?.html_url ? data.html_url : "none"}
              className="no-underline text-inherit"
            >
              <img
                src={data?.avatar_url}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-tl-lg rounded-tr-lg"
                alt={data?.name}
              />
              <div className="p-2">
                <h2 className="text-xl text-center text-bold">{data.name}</h2>
                <p className="text-gray-500 hover:text-gray-400">{data.bio}</p>
                <div className="text-gray-500 hover:text-gray-400 my-0">
                  X :{" "}
                  <Link
                    to={`https://twitter.com/${data.twitter_username}`}
                    target="_blank"
                    className="no-underline text-inherit"
                  >
                    @rahulkumarpahwa
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-5xl font-sans font-bold">About</h2>
          <p className="text-base">
            This is an KG Coding React-Redux Projects App. There are following
            projects :
            <ul className="my-2 list-disc">
              <li>Todo App</li>
              <li>Clock</li>
              <li>Calculator</li>
            </ul>
          </p>
          <div className="text-bold text-xl pb-1">
            TechStack:{" "}
            <ul className="space-y-1 list-disc text-[1rem]">
              <li>React</li>
              <li>Redux</li>
              <li>TailwindCSS</li>
              <li>JSX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-black mt-36 py-12 h-[40rem] text-center">Loading !</div>
  );
};

export default About;
