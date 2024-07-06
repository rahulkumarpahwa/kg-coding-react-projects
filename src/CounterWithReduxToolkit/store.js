import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //name should be same as the name in the configureStore
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      return { counterVal: state.counterVal + 1 };
    },
    decrement: (state) => {
      return { counterVal: state.counterVal - 1 };
    },
    addition: (state, action) => {
      return { counterVal: state.counterVal + Number(action.payload.value) };
    },
    subtraction: (state, action) => {
      return { counterVal: state.counterVal - Number(action.payload.value) };
    },
    clear: () => {
      return { counterVal: 0 };
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: { privacyVal: false },
  reducers: {
    privates: (state) => {
      return { privacyVal: !state.privacyVal };
    },
  },
});

export const toolkitStore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer }, // name of the slice will be same here while defining slice's reducer.
});

export const { increment, decrement, addition, subtraction, clear } =
  counterSlice.actions;

export const { privates } = privacySlice.actions;
