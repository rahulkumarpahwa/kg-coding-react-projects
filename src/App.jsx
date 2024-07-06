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
import Main4 from "./SocialMedia with Link and useNavigate/Main4";
import CreatePost from "./SocialMedia with Link and useNavigate/CreatePost";
import ShowPost from "./SocialMedia with Link and useNavigate/ShowPost";
import Main5 from "./SocialMedia with loader and action/Main5";
import ShowPost2, {
  PostLoader,
} from "./SocialMedia with loader and action/ShowPost";
import CreatePost2, {
  PostAction,
} from "./SocialMedia with loader and action/CreatePost";
// import PostLoader from "./SocialMedia with loader and action/PostLoader";
import Counter from "./CounterWithRedux/Counter.jsx";
import Counter2 from "./CounterWithReduxToolkit/Counter.jsx";
import { Provider } from "react-redux";
import { store } from "./CounterWithRedux/store.js"; //only redux
import { toolkitStore } from "./CounterWithReduxToolkit/store.js"; // with redux toolkit

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
      {
        path: "/socialmediawithlinkandusenavigate",
        element: <Main4 />,
        children: [
          {
            path: "/socialmediawithlinkandusenavigate/",
            element: <ShowPost />,
          },
          {
            path: "/socialmediawithlinkandusenavigate/createpost",
            element: <CreatePost />,
          },
        ],
      },
      {
        path: "/socialmediawithloaderandaction",
        element: <Main5 />,
        children: [
          {
            path: "/socialmediawithloaderandaction/",
            element: <ShowPost2 />,
            loader: PostLoader, // always put the logic to use the loader data in the component where loader is put (here it is ShowPost2.). It can't be available in any other component.
          },
          {
            path: "/socialmediawithloaderandaction/createpost",
            element: <CreatePost2 />,
            action: PostAction,
          },
        ],
      },
      {
        path: "/counter",
        element: (
          <Provider store={store}>
            <Counter />
          </Provider>
        ),
      },
      {
        path: "/counterwithtoolkit",
        element: (
          <Provider store={toolkitStore}>
            <Counter2 />
          </Provider>
        ),
      },
    ],
  },
]);
