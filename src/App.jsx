import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import Home from "./components/Home";
import Clock from "./components/Clock/Clock";
import Calculator from "./components/Calculator/Calculator";
import About from "./components/About";
import Food from "./components/HealthyFood/Food";
import Todo2 from "./components/Todo with useRef/Todo2";

export const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/todo", element: <Todo /> },
    { path: "/clock", element: <Clock /> },
    { path: "/calculator", element: <Calculator /> },
    { path: "/food", element: <Food /> },
    { path: "/about", element: <About /> },
    { path: "/todoRef", element: <Todo2 /> },
  ]);

  return <RouterProvider router={appRouter} />;
};
