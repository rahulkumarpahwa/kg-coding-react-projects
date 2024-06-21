import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import Home from "./components/Home";
import Clock from "./components/Clock/Clock";
import Calculator from "./components/Calculator/Calculator";
import About from "./components/About";
import Food from "./components/HealthyFood/Food";
import Todo2 from "./components/Todo with useRef/Todo2";
import Todo3 from "./components/Todo with Context/Todo3";
import Todo4 from "./components/Todo with useReducer/Todo4";
import Todo5 from "./components/Todo with useReducer Dispatch in Context/Todo5";
import Main from "./components/SocialMedia/Main";
import Main2 from "./components/SocialMedia with Dummy JSON API/Main";
import Main3 from "./components/SocialMedia with Create Post using API/Main"

export const App = () => {
  const appRouter = createBrowserRouter([
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
  ]);

  return <RouterProvider router={appRouter} />;
};
