import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  token: string | undefined;
}

const initialState: TokenState = {
  token: undefined,
};

export const tokenSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    tokenLogout: (state) => {
      state.token = undefined;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, tokenLogout } = tokenSlice.actions;

export default tokenSlice.reducer;
