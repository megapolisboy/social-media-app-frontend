import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { UserType } from "../types";

interface UserState {
  currentUser: UserType | undefined;
}

const initialState: UserState = {
  currentUser: undefined,
};

export const postsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<string>) => {
      // TODO: call sign in with tokenId api
    },
    logout: (state) => {
      // TODO: logout
      state.currentUser = undefined;
    },
  },
});

export const { auth, logout } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;
