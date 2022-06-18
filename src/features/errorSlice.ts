import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { RootState } from "../app/store";
import { UserLongType, UserShortType, UserType } from "../types";

interface ErrorState {
  userErrorMessage: string | undefined;
}

const initialState: ErrorState = {
  userErrorMessage: undefined,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setUserErrorMessage: (state, action: PayloadAction<string>) => {
      state.userErrorMessage = action.payload;
    },

    removeUserErrorMessage: (state) => {
      state.userErrorMessage = undefined;
    },
  },
});

export const { setUserErrorMessage, removeUserErrorMessage } =
  errorSlice.actions;
export default errorSlice.reducer;
