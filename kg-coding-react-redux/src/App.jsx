import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import Home from "./components/Home";
import Clock from "./components/Clock/Clock";
import Calculator from "./components/Calculator/Calculator";

export const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/todo", element: <Todo /> },
    { path: "/clock", element: <Clock /> },
    { path: "/calculator", element: <Calculator /> },
  ]);

  return <RouterProvider router={appRouter} />;
};
