const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  // console.log(action);
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }

  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState(); // Now this fxn will get the current state of the store.
  console.log(state);
};
// To get every time the state of the store when their is change in value of the store than we can
// call an another method with store name as subscribe and pass it the subscriber method which will will be called every time the change in the store happens.
store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" }); // counter set to 1.
store.dispatch({ type: "INCREMENT" }); // counter set to 2 from 1.
store.dispatch({ type: "DECREMENT" }); // again counter set to 1 from 2.
store.dispatch({ type: "ADDITION", payload: { number: 8 } }); // counter set to 9 from 1.
