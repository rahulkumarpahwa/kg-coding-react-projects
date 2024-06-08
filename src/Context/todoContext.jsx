import { createContext } from "react";

export const TodoContext = createContext({
  data: [],
  onclick: () => {},
  ondelete: () => {},
});
