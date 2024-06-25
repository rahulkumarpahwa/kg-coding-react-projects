import { Link } from "react-router-dom";
const Socials = () => {
  return (
    <h3 className=" bottom-0 left-0 right-0 text-lg m-auto text-center">
      Made with &hearts; by{" "}
      <Link
        className="text-inherit"
        to="https://linkedin.com/in/rahulkumarpahwa"
      >
        Rahul Kumar
      </Link>
    </h3>
  );
};

export default Socials;
