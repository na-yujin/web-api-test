import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "@/store/global/types";
import { getStateKeyList } from "@/utils/redux/selector";

const name = "global";

const initialState: GlobalState = {
  count: 0,
};

export const globalSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCount: (state, { payload }: PayloadAction<number>) => {
      state.count = payload;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const globalStateKeyList = getStateKeyList(initialState);
