import { Outlet, createBrowserRouter } from "react-router-dom";
import Todo from "./Todo/Todo";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Clock from "./Clock/Clock";
import Calculator from "./Calculator/Calculator";
import About from "./components/About";
import Food from "./HealthyFood/Food";
import Todo2 from "./Todo with useRef/Todo2";
import Todo3 from "./Todo with Context/Todo3";
import Todo4 from "./Todo with useReducer/Todo4";
import Todo5 from "./Todo with useReducer Dispatch in Context/Todo5";
import Main from "./SocialMedia/Main";
import Main2 from "./SocialMedia with Dummy JSON API/Main";
import Main3 from "./SocialMedia with Create Post using API/Main";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/todo", element: <Todo /> },
      { path: "/clock", element: <Clock /> },
      { path: "/calculator", element: <Calculator /> },
      { path: "/food", element: <Food /> },
      { path: "/about", element: <About /> },
      { path: "/todoref", element: <Todo2 /> },
      { path: "/todocontext", element: <Todo3 /> },
      { path: "/todoreducer", element: <Todo4 /> },
      { path: "/tododispatchcontext", element: <Todo5 /> },
      { path: "/socialmedia", element: <Main /> },
      { path: "/socialmediawithapi", element: <Main2 /> },
      { path: "/socialmediawithcreateapi", element: <Main3 /> },
    ],
  },
]);
