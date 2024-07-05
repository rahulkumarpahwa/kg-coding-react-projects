import {createStore} from "redux";

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newState = store;

  if (action.type === "INCREMENT") {
    newState = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newState = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newState = { counter: store.counter + action.payload.value };
  } else if (action.type === "CLEAR") {
    newState = { counter: 0 };
  } 
  return newState;
};

export const store = createStore(reducer);

// export const increaseAction = store.dispatch({ type: "INCREMENT" });
// export const decreaseAction = store.dispatch({ type: "INCREMENT" });
// export const addAction = (value) =>
//   store.dispatch({ type: "ADDITION", payload: { value } });
