import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { UserLongType, UserShortType, UserType } from "../types";

interface UserState {
  currentUser: UserType | undefined;
  token: string | undefined;
}

const initialState: UserState = {
  currentUser: undefined,
  token: undefined,
};

export const postsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<UserLongType>) => {},

    signIn: (state, action: PayloadAction<UserShortType>) => {},

    authGoogle: (state, action: PayloadAction<string>) => {
      // TODO: call sign in with tokenId api
    },
    logout: (state) => {
      state.token = undefined;
      state.currentUser = undefined;
    },

    setUser: (state, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload;
    },

    removeUser: (state) => {
      state.currentUser = undefined;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const {
  authGoogle,
  logout,
  setUser,
  signUp,
  signIn,
  removeUser,
  setToken,
} = postsSlice.actions;
export const selectUser = (state: RootState) => state.user.currentUser;
export default postsSlice.reducer;
