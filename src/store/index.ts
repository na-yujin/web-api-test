import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { globalReducer as global } from "@/store/global/slice";

export const rootReducer = combineReducers({ global });

export const store = configureStore({
  reducer: (state, action) => {
    switch (action.type) {
      case HYDRATE:
        return action.payload;
      default:
        return rootReducer(state, action);
    }
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;
