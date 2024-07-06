import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newState = store;

  if (action.type === "INCREMENT") {
    // newState = { counter: store.counter + 1, privacy: store.privacy };
    newState = { ...store, counter: store.counter + 1 }; // with spread operator to avoid writing all the values of store again.
  } else if (action.type === "DECREMENT") {
    // newState = { counter: store.counter - 1, privacy: store.privacy };
    newState = { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    // newState = {
    //   counter: store.counter + Number(action.payload.value),
    //   privacy: store.privacy,
    // };
    newState = {
      ...store,
      counter: store.counter + Number(action.payload.value),
    };
  } else if (action.type === "CLEAR") {
    // newState = { counter: 0, privacy: store.privacy };
    newState = { ...store, counter: 0 };
  } else if (action.type === "SUBTRACTION") {
    // newState = {
    //   counter: store.counter - Number(action.payload.value),
    //   privacy: store.privacy,
    // };
    newState = {
      ...store,
      counter: store.counter - Number(action.payload.value),
    };
  } else if (action.type === "PRIVATE") {
    // newState = {
    //   counter: store.counter,
    //   privacy: !store.privacy,
    // };
    newState = {
      ...store,
      privacy: !store.privacy,
    };
  }
  return newState;
};

export const store = createStore(reducer);
