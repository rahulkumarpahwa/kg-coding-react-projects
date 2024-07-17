import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] text-gray-400 py-4 mt-20 font-mono antialiased">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 
      text-center sm:text-left lg:text-left "
      >
        <div>
          <h2 className=" text-lg font-semibold mb-4 mx-8  bg-[#00cce7] rounded-lg text-white p-1">
            About Us
          </h2>
          <p className="mb-4 text-justify mx-2 font-mono antialiased text-md">
            React Redux Projects App is Presentation app which was build for the
            learning React and Redux.
          </p>
        </div>
        <div>
          <h2 className=" text-lg font-semibold mb-4 mx-8  bg-[#00cce7] rounded-lg text-white p-1">
            Quick Links
          </h2>
          <ul>
            <li>
              <Link
                to="/"
                className="transition-colors duration-300 no-underline text-inherit "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline text-inherit transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline text-inherit transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="  text-lg font-semibold mb-4 mx-8  bg-[#00cce7] rounded-lg text-white p-1">
            Follow Us
          </h2>
          <div className="flex flex-col">
            <Link
              to="/"
              className="no-underline text-inherit transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              to="/"
              className="no-underline text-inherit transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              to="/"
              className="no-underline text-inherit transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="  text-lg font-semibold mb-4 mx-8  bg-[#00cce7] rounded-lg text-white p-1">
            Contact Us
          </h2>
          <div className="flex flex-col gap-1 ">
            <p className="my-0">New Delhi, India</p>
            <p className="my-0">Delhi 10001</p>
            <p className="my-0">Email: info@reactreduxapp.com</p>
            <p className="my-0">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-4 font-bold">
        © 2024 React Redux App. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
