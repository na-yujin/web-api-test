import { rootReducer, store } from "@/store/index";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type FetchState = "READY" | "FETCHING" | "SUCCESS" | "FAILURE";

export type CommonThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AnyAction
>;
