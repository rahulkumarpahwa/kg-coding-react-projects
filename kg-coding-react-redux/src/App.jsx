import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import Home from "./components/Home";

export const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/todo", element: <Todo /> },
    // { path: "/contact", element: <Contact /> },
  ]);

  return <RouterProvider router={appRouter} />;
};
