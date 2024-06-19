import { createContext } from "react";

export const socialContext = createContext({
  postList: [],
  postDispatch: () => {},
  AddPostFromAPI: () => {},
});
