import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //name should be same as the name in the configureStore
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      //return { counterVal: state.counterVal + 1 }; // here in simple redux, the state is immutable. so we can't change directly.
      state.counterVal++; // here the state is mutable as redux toolkit will create a copy of it and then compare the old state and new state and make the state update based on it.
    },
    decrement: (state) => {
      // return { counterVal: state.counterVal - 1 };
      state.counterVal--;
    },
    addition: (state, action) => {
      // return { counterVal: state.counterVal + Number(action.payload.value) };
      state.counterVal += Number(action.payload.value);
    },
    subtraction: (state, action) => {
      // return { counterVal: state.counterVal - Number(action.payload.value) };
      state.counterVal -= Number(action.payload.value);
    },
    clear: (state) => {
      // return { counterVal: 0 };
      state.counterVal = 0;
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: { privacyVal: false },
  reducers: {
    privates: (state) => {
      // return { privacyVal: !state.privacyVal };
     state.privacyVal = !state.privacyVal; //newer way with toolkit.
    },
  },
});

export const toolkitStore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer }, // name of the slice will be same here while defining slice's reducer.
});

//export const counterActions = counterSlice.actions;
//or
export const { increment, decrement, addition, subtraction, clear } =
  counterSlice.actions;

export const { privates } = privacySlice.actions;
