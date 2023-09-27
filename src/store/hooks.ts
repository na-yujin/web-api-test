import {
  TypedUseSelectorHook,
  useDispatch as useGenericDispatch,
  useSelector as useGenericSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = useGenericDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;
