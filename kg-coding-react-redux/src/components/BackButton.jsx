import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <div>
      <Link
        to="/"
        className=" absolute top-0 right-0 m-2 w-40 rounded-lg text-center no-underline border-2 bg-slate-500 text-white"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default BackButton;
